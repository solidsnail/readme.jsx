import fs from "fs";
import { TextToSpeechSDK } from "llmini.js/categories/text-to-speech";
import { setCacheDir } from "llmini.js";
import { performance } from "perf_hooks";

setCacheDir("cached-models");

const ttsSDK = new TextToSpeechSDK("OuteTTS-0.2-500M", {
  withWorker: false,
  device: "cpu",
  callbacks: {
    onResult(audioBase64) {
      const audioBuffer = Buffer.from(audioBase64.split(",")[1], "base64");
      fs.writeFileSync("./examples/text-to-speech/output.wav", audioBuffer);
    },
    onProgressChange(info) {
      console.log(info);
    },
    onError(error) {
      console.log({ error });
    },
  },
});

await ttsSDK.load();
const t1 = performance.now();
await ttsSDK.speak("Hello, world!", "male_1", 1.3);
const t2 = performance.now();
console.log("Took", ((t2 - t1) / 1000).toFixed("2"), "seconds");
