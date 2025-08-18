import { CATEGORIES_MODELS } from "../categories/index.js";
import type { ChatModel } from "../categories/chat/model.js";
import { IS_NODE } from "../constants.js";
import type {
  TypeDevice,
  TypeMessage,
  TypeModel,
  TypeProgress,
} from "../types.js";

type Callbacks = {
  /**
   * Progress callback, if total is -1 it means that the progress bar is indefinite
   * @param info {TypeProgress} The progress info object
   * @returns {void}
   */
  onProgressChange?: (info: TypeProgress) => void;
  onMessagesChange?: (messages: TypeMessage[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onResult?: (result: any) => void;
  onLoad?: () => void;
  onError?: (error: string) => void;
};

export class BaseSDK<MODELNAME extends string, MODEL extends TypeModel> {
  withWorker: boolean;
  worker?: Worker;
  model?: MODEL;
  private modelName: MODELNAME;
  private device?: TypeDevice;
  private callbacks: Callbacks;

  constructor(
    modelName: MODELNAME,
    options: {
      withWorker: boolean;
      device?: TypeDevice;
      callbacks: Callbacks;
    }
  ) {
    const { withWorker = true, device, callbacks = {} } = options || {};
    this.modelName = modelName;
    this.withWorker = IS_NODE ? false : withWorker;
    this.device = device;
    this.callbacks = callbacks;
  }

  async load(modelCategory: keyof typeof CATEGORIES_MODELS) {
    if (this.withWorker) {
      return new Promise((resolve) => {
        let workerUrl = "";
        switch (modelCategory) {
          case "audio-text-to-text":
            workerUrl = "../categories/audio-text-to-text/model.js";
            break;
          case "chat":
            workerUrl = "../categories/chat/model.js";
            break;
          case "depth-estimation":
            workerUrl = "../categories/depth-estimation/model.js";
            break;
          case "document-question-answering":
            workerUrl = "../categories/document-question-answering/model.js";
            break;
          case "image-classification":
            workerUrl = "../categories/image-classification/model.js";
            break;
          case "image-text-to-text":
            workerUrl = "../categories/image-text-to-text/model.js";
            break;
          case "object-detection":
            workerUrl = "../categories/object-detection/model.js";
            break;
          case "text-to-speech":
            workerUrl = "../categories/text-to-speech/model.js";
            break;
        }
        this.worker = new Worker(
          new URL(workerUrl, import.meta.url.replace("es2022/", "")),
          {
            type: "module",
          }
        );

        this.worker.addEventListener("message", (e: MessageEvent) => {
          const { event, payload } = e.data;
          switch (event) {
            case "onProgressChange":
              this.callbacks.onProgressChange?.(payload.progress);
              break;
            case "onResult":
              this.callbacks.onResult?.(payload.result);
              break;
            case "onMessagesChange":
              if (!payload.isStopped) {
                this.callbacks.onMessagesChange?.(payload.messages);
              }

              break;
            case "onLoad":
              this.callbacks.onProgressChange?.({
                status: "ready",
                model: this.modelName,
                task: "",
              });
              this.callbacks.onLoad?.();
              resolve(undefined);
              break;
            case "onError":
              this.callbacks.onError?.(payload.error);
              break;
          }
        });

        this.worker.postMessage({
          event: "load",
          payload: { modelName: this.modelName },
        });
      });
    } else {
      const ModelClass = CATEGORIES_MODELS[modelCategory];
      this.model = new ModelClass(this.modelName) as MODEL;
      if (this.callbacks.onProgressChange) {
        this.model.onProgressChange = this.callbacks.onProgressChange;
      }
      if (this.callbacks.onMessagesChange && !this.model.isStopped) {
        (this.model as ChatModel).onMessagesChange =
          this.callbacks.onMessagesChange;
      }
      if (this.callbacks.onResult) {
        this.model.onResult = this.callbacks.onResult;
      }
      if (this.callbacks.onError) {
        this.model.onError = this.callbacks.onError;
      }
      await this.model.load(this.device);
      this.callbacks.onProgressChange?.({
        status: "ready",
        model: this.modelName,
        task: "",
      });
      this.callbacks.onLoad?.();
    }
  }

  destroy() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = undefined;
    }
    this.model = undefined;
  }
}
