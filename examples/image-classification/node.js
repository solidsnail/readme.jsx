import { ImageClassificationSDK } from "llmini.js/categories/image-classification";
import { setCacheDir } from "llmini.js";
import { performance } from "perf_hooks";

const imgUrl = "./examples/image-classification/img.jpg";

setCacheDir("cached-models");

const imageClassifSDK = new ImageClassificationSDK("resnet-152", {
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

await imageClassifSDK.load();
const t1 = performance.now();
await imageClassifSDK.classify(imgUrl);
const t2 = performance.now();
console.log("Took", ((t2 - t1) / 1000).toFixed("2"), "seconds");
