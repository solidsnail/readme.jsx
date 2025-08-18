import { ImageClassificationModel } from "./model.js";
import type { TypeModelName } from "./config.js";
import { BaseSDK } from "../../classes/base-sdk.js";

export default class SDK extends BaseSDK<
  TypeModelName,
  ImageClassificationModel
> {
  /**
   * Classify an image
   * @example
   * sdk.classify(img) // [{ label: "cat", score: 0.9 }];
   */
  async classify(img: string) {
    if (this.withWorker && this.worker) {
      this.worker.postMessage({
        event: "classify",
        payload: { img },
      });
    } else if (this.model) {
      await this.model.classify(img);
    } else {
      throw new Error("SDK not loaded");
    }
  }

  async load() {
    return super.load("image-classification");
  }
}
