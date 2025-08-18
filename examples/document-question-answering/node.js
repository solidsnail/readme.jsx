import { DocumentQuestionAnsweringSDK } from "llmini.js/categories/document-question-answering";
import { setCacheDir } from "llmini.js";
import { performance } from "perf_hooks";

const imgUrl = "./examples/document-question-answering/img.jpg";

setCacheDir("cached-models");

const documentQASDK = new DocumentQuestionAnsweringSDK(
  "donut-base-finetuned-docvqa",
  {
    withWorker: false,
    device: "cpu",
    callbacks: {
      onResult(text) {
        console.log({ text });
      },
      onProgressChange(info) {
        console.log(info);
      },
      onError(error) {
        console.log({ error });
      },
    },
  }
);

await documentQASDK.load();
const t1 = performance.now();
await documentQASDK.ask("What is the invoice number ?", imgUrl);
const t2 = performance.now();
console.log("Took", ((t2 - t1) / 1000).toFixed("2"), "seconds");
