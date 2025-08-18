import { ObjectDetectionModel } from "./model.js";
import type { TypeModelName } from "./config.js";
import { BaseSDK } from "../../classes/base-sdk.js";

export default class SDK extends BaseSDK<TypeModelName, ObjectDetectionModel> {
  /**
   * Detect objects in an image
   * @example
   * sdk.detect(img)
   */
  async detect(img: string) {
    if (this.withWorker && this.worker) {
      this.worker.postMessage({
        event: "detect",
        payload: { img },
      });
    } else if (this.model) {
      await this.model.detect(img);
    } else {
      throw new Error("Model not loaded");
    }
  }

  async load() {
    return super.load("object-detection");
  }
}
