import {
  pipeline,
  RawAudio,
  TextToAudioPipeline,
} from "@huggingface/transformers";

import { BaseModel } from "../../classes/base-model.js";
import {
  CONFIG,
  type TypeModelName,
  type TypeKokoroVoice,
  type TypeOutettsVoice,
} from "./config.js";
import type { TypeDevice } from "../../types.js";
import type { KokoroTTS } from "kokoro-js";
import { IS_NODE } from "../../constants.js";

export class TextToSpeechModel extends BaseModel<
  TypeModelName,
  string,
  KokoroTTS | TextToAudioPipeline
> {
  uint8ToBase64 = (bytes: Uint8Array) => {
    const chunk = 0x8000;
    let binary = "",
      result = "";
    for (let i = 0; i < bytes.byteLength; i += chunk) {
      const sub = bytes.subarray(i, i + chunk);
      binary += String.fromCharCode(...sub);
    }
    result = btoa(binary);
    return result;
  };

  ttsToBase64Wav = async ({
    sampling_rate,
    audio,
  }: RawAudio): Promise<string> => {
    const wavefilePkg = await import("wavefile");
    const { default: WaveFileDefault, WaveFile } = wavefilePkg;
    const WaveFileCls = (WaveFileDefault?.WaveFile ||
      WaveFile) as unknown as typeof WaveFile;
    const wav = new WaveFileCls();
    wav.fromScratch(1, sampling_rate, "32f", audio);
    const wavBuf = wav.toBuffer();
    const b64 = this.uint8ToBase64(new Uint8Array(wavBuf));
    return `data:audio/wav;base64,${b64}`;
  };

  speak = async (
    text: string,
    voice: TypeKokoroVoice | TypeOutettsVoice = this.modelName ===
    "Kokoro-82M-v1.0-ONNX"
      ? "am_puck"
      : "male_1",
    speed = 1.3
  ) => {
    if (!this.model) {
      throw new Error("Model is not loaded");
    }
    const modelConfig = CONFIG[this.modelName];
    switch (modelConfig.pretrained) {
      case "Kokoro": {
        const generator = this.pipeline as KokoroTTS;
        const result = await generator.generate(text, {
          voice: voice as TypeKokoroVoice,
          speed,
        });
        const base64wav = await this.ttsToBase64Wav(result);
        this.onResult(base64wav);
        break;
      }
      case "Outetts": {
        const generator = this.pipeline!;
        //@ts-expect-error No dts yer for outetts
        const speaker = generator.load_default_speaker(
          voice as TypeOutettsVoice
        );
        //@ts-expect-error No dts yer for outetts
        const result = await generator.generate({
          text,
          speaker,
        });
        result.audio = result.audio.data;
        result.sampling_rate = result.sr;
        const base64wav = await this.ttsToBase64Wav(result);
        this.onResult(base64wav);
        break;
      }
      case "default-type": {
        // Implement here
        break;
      }
    }
  };
  load = async (device?: TypeDevice) => {
    const modelConfig = CONFIG[this.modelName];
    switch (modelConfig.pretrained) {
      case "Kokoro": {
        const { KokoroTTS } = await import("kokoro-js");

        this.pipeline = (await KokoroTTS.from_pretrained(modelConfig.name, {
          dtype: modelConfig.dtype as "q4",
          device: (device || modelConfig.device) as "webgpu",
          progress_callback: this.onProgressChange,
        })) as KokoroTTS;
        this.model = this.pipeline.model;
        break;
      }
      case "Outetts": {
        //@ts-expect-error No dts yer for outetts
        const { HFModelConfig_v1, InterfaceHF } = await import("outetts");
        this.onProgressChange({
          status: "progress",
          file: this.modelName,
          progress: 0,
          total: -1,
          name: this.modelName,
          loaded: 0,
        });
        const model_config = new HFModelConfig_v1({
          model_path: modelConfig.name,
          language: "en", //  en, zh, ja, ko
          dtype: modelConfig.dtype,
          device: device || modelConfig.device,
        });
        this.pipeline = await InterfaceHF({
          model_version: "0.2",
          cfg: model_config,
        });
        // this.pipeline.print_default_speakers();
        //@ts-expect-error No dts yer for outetts
        this.model = this.pipeline.model.model;
        break;
      }
      case "default-type": {
        this.pipeline = (await pipeline<"text-to-speech">(
          "text-to-speech",
          modelConfig.name,
          {
            dtype: modelConfig.dtype,
            device: device || modelConfig.device,
            model_file_name: modelConfig.modelFileName,
            progress_callback: this.onProgressChange,
            subfolder: modelConfig.subfolder,
          }
        )) as TextToAudioPipeline;
        this.model = this.pipeline.model;
        break;
      }
    }
  };
}

if (!IS_NODE) {
  let model: TextToSpeechModel | undefined;
  self.addEventListener("message", async (e) => {
    try {
      const { event, payload } = e.data;
      switch (event) {
        case "load":
          model = new TextToSpeechModel(payload.modelName);
          await model.load(payload.device);
          self.postMessage({
            event: "onLoad",
            payload: {},
          });
          break;
        case "speak":
          if (!model) {
            throw new Error("No model found");
          }
          await model.speak(payload.text, payload.voice, payload.speed);
          break;
      }
    } catch (error) {
      self.postMessage({
        event: "onError",
        payload: {
          error: (error as Error).message,
        },
      });
    }
  });
}
