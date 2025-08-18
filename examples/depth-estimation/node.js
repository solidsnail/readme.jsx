import fs from "fs";
import { DepthEstimationSDK } from "llmini.js/categories/depth-estimation";
import { setCacheDir } from "llmini.js";
import { performance } from "perf_hooks";

const imgUrl = "./examples/depth-estimation/img.jpg";
const outputPath = "./examples/depth-estimation/depth.jpg";

setCacheDir("cached-models");

const depthEstimSDK = new DepthEstimationSDK("depth-anything-small-hf", {
  withWorker: false,
  device: "cpu",
  callbacks: {
    onResult(base64Img) {
      const base64Data = base64Img.replace(/^data:image\/\w+;base64,/, "");
      const imageBuffer = Buffer.from(base64Data, "base64");
      fs.writeFileSync(outputPath, imageBuffer);
    },
    onProgressChange(info) {
      console.log(info);
    },
    onError(error) {
      console.log({ error });
    },
  },
});

await depthEstimSDK.load();
const t1 = performance.now();
await depthEstimSDK.estimate(imgUrl);
const t2 = performance.now();
console.log("Took", ((t2 - t1) / 1000).toFixed("2"), "seconds");
