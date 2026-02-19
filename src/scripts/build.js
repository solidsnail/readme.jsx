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
          name: "readme.jsx",
          description: "A jsx to README.md compiler",
          license: "MIT",
          type: "module",
          private: false,
          version: packageJson.version,
          repository: {
            url: "https://github.com/solidsnail/readme.jsx",
          },
          bin: "./index.js",
          dependencies: {
            prettier: "^3.6.2",
          },
          exports: {
            ".": {
              import: "./index.js",
              types: "./index.d.ts",
            },
            "./ui": {
              import: "./ui/index.js",
              types: "./ui/index.d.ts",
            },
            "./ui/index": {
              import: "./ui/index.js",
              types: "./ui/index.d.ts",
            },
            "./types": {
              import: "./types.js",
              types: "./types.d.ts",
            },
            "./jsx.js": {
              import: "./jsx.js",
              types: "./jsx.d.ts",
            },
          },
        },
        null,
        "   ",
      ),
    );
    await fs.copyFile("README.md", "dist/README.md");
    await fs.copyFile("LICENSE", "dist/LICENSE");
    console.log("*** Build finished succesfully ***");
  });
};

main();
