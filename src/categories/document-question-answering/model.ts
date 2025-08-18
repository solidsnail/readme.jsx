import {
  pipeline,
  DocumentQuestionAnsweringPipeline,
  type DocumentQuestionAnsweringOutput,
} from "@huggingface/transformers";

import { BaseModel } from "../../classes/base-model.js";
import { CONFIG, type TypeModelName } from "./config.js";
import type { TypeDevice } from "../../types.js";
import { IS_NODE } from "../../constants.js";

export class DocumentQuestionAnsweringModel extends BaseModel<
  TypeModelName,
  string,
  DocumentQuestionAnsweringPipeline
> {
  ask = async (image: string, question: string) => {
    if (!this.pipeline) {
      throw new Error("Generator is not loaded");
    }
    const modelConfig = CONFIG[this.modelName];
    switch (modelConfig.pretrained) {
      case "default-type": {
        const output = await this.pipeline(image, question);
        const [{ answer }] = output as DocumentQuestionAnsweringOutput;
        this.onResult(answer);
        break;
      }
    }
  };
  load = async (device?: TypeDevice) => {
    const modelConfig = CONFIG[this.modelName];
    switch (modelConfig.pretrained) {
      case "default-type": {
        this.pipeline = (await pipeline<"document-question-answering">(
          "document-question-answering",
          modelConfig.name,
          {
            dtype: modelConfig.dtype,
            device: device || modelConfig.device,
            model_file_name: modelConfig.modelFileName,
            progress_callback: this.onProgressChange,
            subfolder: modelConfig.subfolder,
          }
        )) as DocumentQuestionAnsweringPipeline;
        break;
      }
    }
  };
}

if (!IS_NODE) {
  let model: DocumentQuestionAnsweringModel | undefined;
  self.addEventListener("message", async (e) => {
    try {
      const { event, payload } = e.data;
      switch (event) {
        case "load":
          model = new DocumentQuestionAnsweringModel(payload.modelName);
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
          await model.ask(payload.image, payload.question);
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
