import { AudioTextToTextModel } from "./audio-text-to-text/model.js";
import { ChatModel } from "./chat/model.js";
import { DepthEstimationModel } from "./depth-estimation/model.js";
import { DocumentQuestionAnsweringModel } from "./document-question-answering/model.js";
import { ImageClassificationModel } from "./image-classification/model.js";
import { ImageTextToTextModel } from "./image-text-to-text/model.js";
import { ObjectDetectionModel } from "./object-detection/model.js";
import { TextToSpeechModel } from "./text-to-speech/model.js";

export const CATEGORIES_MODELS = {
  chat: ChatModel,
  "audio-text-to-text": AudioTextToTextModel,
  "image-text-to-text": ImageTextToTextModel,
  "text-to-speech": TextToSpeechModel,
  "depth-estimation": DepthEstimationModel,
  "document-question-answering": DocumentQuestionAnsweringModel,
  "image-classification": ImageClassificationModel,
  "object-detection": ObjectDetectionModel,
};
