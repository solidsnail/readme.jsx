import { AudioTextToTextModel } from "./model.js";
import type { TypeModelName } from "./config.js";
import { BaseSDK } from "../../classes/base-sdk.js";
import { IS_NODE } from "../../constants.js";

export default class SDK extends BaseSDK<TypeModelName, AudioTextToTextModel> {
  private base64ToArrayBuffer(base64: string) {
    const cleanedBase64 = base64.replace(/^data:audio\/\w+;base64,/, "");
    const binaryString =
      typeof atob !== "undefined"
        ? atob(cleanedBase64)
        : Buffer.from(cleanedBase64, "base64").toString("binary");
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  }

  private isInputBase64(input: string) {
    return input.startsWith("data:audio");
  }

  private async readWavFileAsArrayBuffer(input: string) {
    if (!IS_NODE) {
      throw new Error("Reading local files only supported in Node.js.");
    }

    const fs = await import("fs/promises");
    const fileBuffer = await fs.readFile(input);
    return fileBuffer.buffer.slice(
      fileBuffer.byteOffset,
      fileBuffer.byteOffset + fileBuffer.byteLength
    ) as ArrayBuffer;
  }

  /**
   * Transcribe audio
   * @param input URL, base64 string, file path (Node), or ArrayBuffer
   */
  async transcribe(input: string | ArrayBuffer) {
    let audioArrayBuffer: ArrayBuffer;

    if (input instanceof ArrayBuffer) {
      audioArrayBuffer = input;
    } else if (typeof input === "string") {
      if (input.startsWith("http:") || input.startsWith("https:")) {
        const response = await fetch(input);
        audioArrayBuffer = await response.arrayBuffer();
      } else if (this.isInputBase64(input)) {
        audioArrayBuffer = this.base64ToArrayBuffer(input);
      } else if (
        IS_NODE &&
        (input.startsWith("./") ||
          input.startsWith("../") ||
          input.endsWith(".wav"))
      ) {
        audioArrayBuffer = await this.readWavFileAsArrayBuffer(input);
      } else {
        throw new Error(
          "Invalid input. Must be a URL, base64 string, file path (Node), or ArrayBuffer."
        );
      }
    } else {
      throw new Error("Invalid input type.");
    }

    if (this.withWorker && this.worker) {
      this.worker.postMessage({
        event: "transcribe",
        payload: { audioArrayBuffer },
      });
    } else if (this.model) {
      await this.model.transcribe(audioArrayBuffer);
    } else {
      throw new Error("Model not loaded");
    }
  }

  async load() {
    return super.load("audio-text-to-text");
  }
}
