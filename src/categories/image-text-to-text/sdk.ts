import { ImageTextToTextModel } from "./model.js";
import type { TypeModelName } from "./config.js";
import { EMPTY_BASE64_IMG } from "../../constants.js";
import { BaseSDK } from "../../classes/base-sdk.js";

export default class SDK extends BaseSDK<TypeModelName, ImageTextToTextModel> {
  /**
   * Get informations about an image
   * @example
   * sdk.ask"Give me a description", imgUrl)
   * @example
   * sdk.ask("Give me a description", imgBase64)
   * @example
   * //For "Florence2" models
   * "<CAPTION>",
   * "<DETAILED_CAPTION>",
   * "<MORE_DETAILED_CAPTION>",
   * "<OCR>",
   * "<OCR_WITH_REGION>",
   * "<OD>",
   * "<DENSE_REGION_CAPTION>",
   * "<CAPTION_TO_PHRASE_GROUNDING>",
   * "<REFERRING_EXPRESSION_SEGMENTATION>",
   * "<REGION_TO_SEGMENTATION>",
   * "<OPEN_VOCABULARY_DETECTION>",
   * "<REGION_TO_CATEGORY>",
   * "<REGION_TO_DESCRIPTION>",
   * "<REGION_TO_OCR>",
   * "<REGION_PROPOSAL>",
   * sdk.ask("<CAPTION>Describe this image", imgBase64)
   */
  async ask(question: string, image: string) {
    if (this.withWorker && this.worker) {
      this.worker.postMessage({
        event: "ask",
        payload: { question, image },
      });
    } else if (this.model) {
      await this.model.ask(question, image);
    } else {
      throw new Error("Model not loaded");
    }
  }

  async warmUp() {
    this.ask("", EMPTY_BASE64_IMG);
  }

  async load() {
    return super.load("image-text-to-text");
  }
}
