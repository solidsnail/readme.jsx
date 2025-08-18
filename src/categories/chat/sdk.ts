import { BaseSDK } from "../../classes/base-sdk.js";
import type { TypeMessage } from "../../types.js";
import type { TypeModelName } from "./config.js";
import { ChatModel } from "./model.js";

type ChatSettings = {
  maxTokens?: number;
  temperature?: number;
  top_k?: number;
  top_p?: number;
  characterTimeout?: number;
};

export default class SDK extends BaseSDK<TypeModelName, ChatModel> {
  /**
   * Prompt message to ai assistant
   * @example
   * sdk.prompt({
        prompt: "Why is the sky blue ?",
        settings: { maxTokens: 100 },
      });
    * @example
    * sdk.prompt({
          prompt: "Describe this image",
          settings: { attachedImg: base64Image, },
        });
    * @example
    * sdk.prompt({
      prompt: "A cute and adorable baby fox with big brown eyes, autumn leaves in the background enchanting,immortal,fluffy, shiny mane,Petals,fairyism,unreal engine 5 and Octane Render,highly detailed, photorealistic, cinematic, natural colors.",
      settings: { isImageGen: true, },
      });
   */
  async prompt({
    prompt,
    settings = {
      maxTokens: 400,
    },
    attachedImg,
    isImageGen,
  }: {
    prompt: string;
    settings?: ChatSettings;
    attachedImg?: string;
    isImageGen?: boolean;
  }) {
    const chatTemplate = isImageGen ? "text_to_image" : undefined;
    const content = attachedImg ? `<image_placeholder>\n${prompt}` : prompt;

    const messagePayload: TypeMessage = {
      role: "user",
      content,
      ...(attachedImg ? { images: [attachedImg] } : {}),
    };
    if (this.withWorker && this.worker) {
      this.worker.postMessage({
        event: "addMessage",
        payload: messagePayload,
      });
      this.worker.postMessage({
        event: "prompt",
        payload: { ...settings, chat_template: chatTemplate },
      });
    } else if (this.model) {
      this.model.addMessage(messagePayload);
      await this.model.prompt({ ...settings, chat_template: chatTemplate });
    } else {
      throw new Error("Chat model not loaded");
    }
  }

  addMessage = (message: TypeMessage) => {
    if (this.withWorker && this.worker) {
      this.worker.postMessage({
        event: "addMessage",
        payload: message,
      });
    } else if (this.model) {
      this.model.addMessage(message);
    } else {
      throw new Error("Chat model not loaded");
    }
  };

  stop = () => {
    if (this.withWorker && this.worker) {
      this.worker.postMessage({
        event: "stop",
      });
    } else if (this.model) {
      this.model.stop();
    } else {
      throw new Error("Chat model not loaded");
    }
  };

  setMessages = (messages: TypeMessage[]) => {
    if (this.withWorker && this.worker) {
      this.worker.postMessage({
        event: "setMessages",
        payload: messages,
      });
    } else if (this.model) {
      this.model.setMessages(messages);
    } else {
      throw new Error("Chat model not loaded");
    }
  };

  async load() {
    return super.load("chat");
  }
}
