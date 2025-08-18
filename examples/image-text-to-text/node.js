import { ImageTextToTextSDK } from "llmini.js/categories/image-text-to-text";
import { setCacheDir } from "llmini.js";
import { performance } from "perf_hooks";

const imgUrl = "./examples/image-text-to-text/book.jpg";

setCacheDir("cached-models");

const imageTTTSDK = new ImageTextToTextSDK("Florence-2-large", {
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

await imageTTTSDK.load();
const t1 = performance.now();
await imageTTTSDK.ask("<CAPTION_TO_PHRASE_GROUNDING>", imgUrl);
const t2 = performance.now();
console.log("Took", ((t2 - t1) / 1000).toFixed("2"), "seconds");
