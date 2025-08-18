import { ChatSDK } from "llmini.js/categories/chat";
import { setCacheDir } from "llmini.js";
import { performance } from "perf_hooks";

setCacheDir("cached-models");

const chatSDK = new ChatSDK("FastThink-0.5B-Tiny", {
  withWorker: false,
  device: "cpu",
  callbacks: {
    onResult: console.log,
    onProgressChange: console.log,
    onError: console.log,
  },
});

await chatSDK.load();
const t1 = performance.now();
await chatSDK.prompt({
  prompt: "Why is the sky blue ?",
  settings: {
    maxTokens: 100,
  },
});
const t2 = performance.now();
console.log("Took", ((t2 - t1) / 1000).toFixed("2"), "seconds");
