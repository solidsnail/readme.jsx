import { AudioTextToTextSDK } from "llmini.js/categories/audio-text-to-text";
import { setCacheDir } from "llmini.js";
import { performance } from "perf_hooks";

const wavUrl = "./examples/audio-to-text/mlk.wav";

setCacheDir("cached-models");

const audioTTTSDK = new AudioTextToTextSDK("Voxtral-Mini-3B-2507-ONNX", {
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

await audioTTTSDK.load();
const t1 = performance.now();
await audioTTTSDK.transcribe(wavUrl);
const t2 = performance.now();
console.log("Took", ((t2 - t1) / 1000).toFixed("2"), "seconds");
