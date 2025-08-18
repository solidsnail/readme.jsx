import {
  AutoModelForVision2Seq,
  AutoProcessor,
  Florence2ForConditionalGeneration,
  AutoModelForImageTextToText,
  type Message,
  RawImage,
  Tensor,
} from "@huggingface/transformers";

import { BaseModel } from "../../classes/base-model.js";
import { CONFIG, type TypeModelName } from "./config.js";
import type { TypeDevice } from "../../types.js";
import { IS_NODE } from "../../constants.js";

export class ImageTextToTextModel extends BaseModel<TypeModelName, string> {
  ask = async (question: string, img: string) => {
    if (!this.model) {
      throw new Error("Model is not loaded");
    }
    if (!this.tokenizer) {
      throw new Error("Tokenizer is not loaded");
    }
    if (!this.processor) {
      throw new Error("Processor is not loaded");
    }
    try {
      const modelConfig = CONFIG[this.modelName];
      switch (modelConfig.pretrained) {
        case "Vision2Seq": {
          const messages = [
            {
              role: "user",
              content: [
                {
                  type: "image",
                },
                {
                  type: "text",
                  text: question,
                },
              ],
            },
          ] as unknown as Message[];
          const prompt = this.tokenizer.apply_chat_template(messages, {
            add_generation_prompt: true,
            tokenize: false,
          });
          const image = await RawImage.read(img);
          const inputs = await this.processor(prompt, image, {
            do_image_splitting: true,
          });
          const outputs = (await this.model.generate({
            ...inputs,
            generation_config: { max_new_tokens: 400 },
          })) as Tensor[];
          const response = this.processor.decode(
            outputs[0].slice(inputs.input_ids.length),
            {
              skip_special_tokens: true,
              clean_up_tokenization_spaces: true,
            }
          );
          const assistantResponse =
            response.split("Assistant:")[1]?.trim() || response;
          this.onResult(assistantResponse);
          break;
        }
        case "Auto": {
          const messages = [
            {
              role: "user",
              content: `<image>${question}`,
            },
          ] as unknown as Message[];
          const prompt = this.processor.apply_chat_template(messages, {
            add_generation_prompt: true,
            tokenize: false,
          });
          const image = await RawImage.read(img);
          const inputs = await this.processor(image, prompt, {
            add_special_tokens: false,
          });
          const outputs = (await this.model.generate({
            ...inputs,
            generation_config: { max_new_tokens: 400 },
            do_sample: false,
          })) as number[][];
          const decoded = this.processor.batch_decode(
            //@ts-expect-error null is fine
            outputs.slice(null, [inputs.input_ids.dims.at(-1), null]),
            { skip_special_tokens: true }
          );
          this.onResult(decoded[0]);
          break;
        }
        case "Florence2": {
          // TODO: Handle tasks
          /*
                    <option value="<CAPTION>">Caption</option>
                    <option value="<DETAILED_CAPTION>">Detailed Caption</option>
                    <option value="<MORE_DETAILED_CAPTION>">
                      More Detailed Caption
                    </option>
                    <option value="<OCR>">OCR</option>
                    <option value="<OCR_WITH_REGION>">OCR with Region</option>
                    <option value="<OD>">Object Detection</option>
                    <option value="<DENSE_REGION_CAPTION>">
                      Dense Region Caption
                    </option>
                    <option value="<CAPTION_TO_PHRASE_GROUNDING>">
                      Caption to Phrase Grounding
                    </option>
                    <option value="<REFERRING_EXPRESSION_SEGMENTATION>">Referring Expression Segmentation</option> 
                    <option value="<REGION_TO_SEGMENTATION>">Region to Segmentation</option> 
                    <option value="<OPEN_VOCABULARY_DETECTION>">Open Vocabulary Detection</option> 
                    <option value="<REGION_TO_CATEGORY>">Region to Category</option> 
                    <option value="<REGION_TO_DESCRIPTION>">Region to Description</option> 
                    <option value="<REGION_TO_OCR>">Region to OCR</option> 
                    <option value="<REGION_PROPOSAL>">Region Proposal</option> 
          */
          const prefixes = [
            "<CAPTION>",
            "<DETAILED_CAPTION>",
            "<MORE_DETAILED_CAPTION>",
            "<OCR>",
            "<OCR_WITH_REGION>",
            "<OD>",
            "<DENSE_REGION_CAPTION>",
            "<CAPTION_TO_PHRASE_GROUNDING>",
            "<REFERRING_EXPRESSION_SEGMENTATION>",
            "<REGION_TO_SEGMENTATION>",
            "<OPEN_VOCABULARY_DETECTION>",
            "<REGION_TO_CATEGORY>",
            "<REGION_TO_DESCRIPTION>",
            "<REGION_TO_OCR>",
            "<REGION_PROPOSAL>",
          ];
          if (!prefixes.some((prefix) => question.startsWith(prefix))) {
            throw new Error(
              `Florence2 requires one of the following tags as a prefix to your question: ${prefixes.join(
                "\n"
              )}\n Example: "<CAPTION>Describe this image"`
            );
          }
          const task = question;
          //@ts-expect-error construct_prompts exists
          const prompts = this.processor.construct_prompts(task);
          const image = await RawImage.read(img);
          const inputs = await this.processor(image, prompts);

          const generated_ids = (await this.model.generate({
            ...inputs,
            max_new_tokens: 256,
          })) as Tensor;
          const generated_text = this.processor.batch_decode(generated_ids, {
            skip_special_tokens: false,
          })[0];
          //@ts-expect-error post_process_generation exists
          const result = this.processor.post_process_generation(
            generated_text,
            task,
            image.size
          ) as Record<string, string>;
          if (typeof result[task] === "string") {
            this.onResult(result[task]);
          } else {
            this.onResult(JSON.stringify(result[task]));
          }
          break;
        }
      }
    } catch (error) {
      this.onError((error as Error).message);
    }
  };
  load = async (device?: TypeDevice) => {
    const modelConfig = CONFIG[this.modelName];
    switch (modelConfig.pretrained) {
      case "Vision2Seq": {
        this.processor = await AutoProcessor.from_pretrained(modelConfig.name);
        this.model = await AutoModelForVision2Seq.from_pretrained(
          modelConfig.name,
          {
            dtype: modelConfig.dtype,
            device: device || modelConfig.device,
            model_file_name: modelConfig.modelFileName,
            progress_callback: this.onProgressChange,
            subfolder: modelConfig.subfolder,
          }
        );
        this.tokenizer = this.processor.tokenizer;
        break;
      }
      case "Florence2": {
        this.processor = await AutoProcessor.from_pretrained(modelConfig.name);
        this.model = await Florence2ForConditionalGeneration.from_pretrained(
          modelConfig.name,
          {
            dtype: modelConfig.dtype,
            device: device || modelConfig.device,
            model_file_name: modelConfig.modelFileName,
            progress_callback: this.onProgressChange,
            subfolder: modelConfig.subfolder,
          }
        );
        this.tokenizer = this.processor.tokenizer;
        break;
      }
      case "Auto": {
        this.processor = await AutoProcessor.from_pretrained(modelConfig.name);
        this.model = await AutoModelForImageTextToText.from_pretrained(
          modelConfig.name,
          {
            dtype: modelConfig.dtype,
            device: device || modelConfig.device,
            model_file_name: modelConfig.modelFileName,
            progress_callback: this.onProgressChange,
            subfolder: modelConfig.subfolder,
          }
        );
        this.tokenizer = this.processor.tokenizer;
        break;
      }
    }
  };
}

if (!IS_NODE) {
  let model: ImageTextToTextModel | undefined;
  self.addEventListener("message", async (e) => {
    try {
      const { event, payload } = e.data;
      switch (event) {
        case "load":
          model = new ImageTextToTextModel(payload.modelName);
          await model.load(payload.device);
          self.postMessage({
            event: "onLoad",
            payload: {},
          });
          break;
        case "ask":
          if (!model) {
            throw new Error("No model found");
          }
          await model.ask(payload.question, payload.image);
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
