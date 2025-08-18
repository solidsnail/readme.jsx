import {
  InterruptableStoppingCriteria,
  Pipeline,
  PreTrainedModel,
  PreTrainedTokenizer,
  Processor,
  RawImage,
} from "@huggingface/transformers";
import type { TypeDevice, TypeProgress } from "../types.js";
import { IS_NODE } from "../constants.js";

declare global {
  interface Navigator {
    gpu: {
      requestAdapter: () => Promise<unknown>;
    };
  }
}

export class BaseModel<
  MODELNAME,
  RESULT,
  PIPELINE = Pipeline,
  PROCESSOR = Processor,
  TOKENIZER = PreTrainedTokenizer
> {
  modelName: MODELNAME;
  processor: PROCESSOR | undefined;
  pipeline: PIPELINE | undefined;
  model: PreTrainedModel | undefined;
  tokenizer: TOKENIZER | undefined;

  characterQueue: string[] = [];
  isProcessingQueue = false;
  currentStoppingCriteria: InterruptableStoppingCriteria | null = null; // Add this
  isStopped = false;

  constructor(modelName: MODELNAME) {
    this.modelName = modelName;
  }

  onProgressChange = (progressInfo: TypeProgress) => {
    if (!IS_NODE) {
      self.postMessage({
        event: "onProgressChange",
        payload: {
          progress: progressInfo,
        },
      });
    }
  };

  onError = (error: string) => {
    if (!IS_NODE) {
      self.postMessage({
        event: "onError",
        payload: {
          error,
        },
      });
    }
  };

  onResult = (result: RESULT) => {
    if (!IS_NODE) {
      self.postMessage({
        event: "onResult",
        payload: {
          result,
        },
      });
    }
  };

  async checkWebGpuSupport() {
    if (!navigator.gpu) {
      throw new Error(
        "No gpu adapter found, currently only Chrome and Edge support Webgpu:\n\n https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API"
      );
    }
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      throw new Error("WebGPU is not supported");
    }
  }

  async rawImageToBase64(rawImage: RawImage): Promise<string> {
    if (IS_NODE) {
      const imageBuffer = await rawImage.toSharp().png().toBuffer();
      const base64 = imageBuffer.toString("base64");
      return `data:image/png;base64,${base64}`;
    } else {
      const blob = await rawImage.toBlob("image/png", 1.0);
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      const base64 = "data:image/png;base64," + dataUrl.split(",")[1];
      return base64;
    }
  }

  stop = () => {
    if (this.currentStoppingCriteria) {
      this.currentStoppingCriteria.interrupt();
      this.currentStoppingCriteria = null;
      this.characterQueue = [];
      this.isProcessingQueue = false;
      this.isStopped = true;
    }
  };

  load = async (device?: TypeDevice) => {
    console.log("Implement load method", device);
  };
}
