import { DepthEstimationModel } from "./model.js";
import { BaseSDK } from "../../classes/base-sdk.js";
import type { TypeModelName } from "./config.js";

export default class SDK extends BaseSDK<TypeModelName, DepthEstimationModel> {
  /**
   * Generate image depth estimation image
   * @example
   * sdk.estimate(img);
   */
  async estimate(img: string) {
    if (this.withWorker && this.worker) {
      this.worker.postMessage({
        event: "estimate",
        payload: { img },
      });
    } else if (this.model) {
      await this.model.estimate(img);
    } else {
      throw new Error("Model not loaded");
    }
  }

  async load() {
    return super.load("depth-estimation");
  }
}
