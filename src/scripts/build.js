import { exec } from "child_process";
import fs from "fs/promises";

const main = async () => {
  const tsc = exec("tsc --outDir ./dist");
  tsc.on("close", async () => {
    const packageJsonStr = await fs.readFile("package.json", "utf-8");
    const packageJson = JSON.parse(packageJsonStr);
    await fs.writeFile(
      "dist/package.json",
      JSON.stringify(
        {
          name: "llmini.js",
          description:
            "A modular TypeScript SDK that enables AI/ML capabilities directly in the browser or Node.js",
          license: "MIT",
          type: "module",
          private: false,
          version: packageJson.version,
          repository: {
            url: "https://github.com/solidsnail/llmini.js",
          },
          dependencies: {
            "@huggingface/transformers": "^3.7.1",
            "kokoro-js": "^1.2.1",
            outetts: "^0.2.0",
            wavefile: "^11.0.0",
          },
          exports: {
            "./categories/*": {
              import: "./categories/*/index.js",
              types: "./categories/*/index.d.ts",
            },
            "./categories/*/model.js": "./categories/*/model.js",
            "./categories/index.js": {
              import: "./categories/index.js",
              types: "./categories/index.d.ts",
            },
            "./themes/*.css": "./themes/*.css",
            ".": {
              import: "./index.js",
              types: "./index.d.ts",
            },
            "./types": {
              import: "./types.js",
              types: "./types.d.ts",
            },
          },
        },
        null,
        "   "
      )
    );
    await fs.cp("src/themes", "dist/themes", { recursive: true });
    await fs.copyFile("README.md", "dist/README.md");
    await fs.copyFile("LICENSE", "dist/LICENSE");
    console.log("*** Build finished succesfully ***");
  });
};

main();
