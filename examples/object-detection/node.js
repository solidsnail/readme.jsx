import { ObjectDetectionSDK } from "llmini.js/categories/object-detection";
import { setCacheDir } from "llmini.js";
import { performance } from "perf_hooks";

const imgUrl = "./examples/object-detection/img.jpg";

setCacheDir("cached-models");

const objectDetctSDK = new ObjectDetectionSDK("rfdetr_small-ONNX", {
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
});

await objectDetctSDK.load();
const t1 = performance.now();
await objectDetctSDK.detect(imgUrl);
const t2 = performance.now();
console.log("Took", ((t2 - t1) / 1000).toFixed("2"), "seconds");
