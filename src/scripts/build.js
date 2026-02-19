import { exec } from "child_process";
import fs from "fs/promises";

const main = async () => {
  console.log("🚀 Starting build...");
  const tsc = exec("tsc --outDir ./dist");

  tsc.on("error", (err) => {
    console.error("❌ TSC failed:", err);
    process.exit(1);
  });

  tsc.on("close", async (code) => {
    if (code !== 0) {
      console.error(`❌ TSC exited with code ${code}`);
      process.exit(1);
    }

    try {
      const packageJsonStr = await fs.readFile("package.json", "utf-8");
      const packageJson = JSON.parse(packageJsonStr);

      const distPackageJson = {
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
          prettier: packageJson.devDependencies.prettier || "^3.6.2",
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
          "./constants": {
            import: "./constants.js",
            types: "./constants.d.ts",
          },
          "./jsx.js": {
            import: "./jsx.js",
            types: "./jsx.d.ts",
          },
        },
      };

      await fs.writeFile(
        "dist/package.json",
        JSON.stringify(distPackageJson, null, 2),
      );

      await fs.copyFile("README.md", "dist/README.md");
      await fs.copyFile("LICENSE", "dist/LICENSE");
      console.log("✨ Build finished successfully!");
    } catch (err) {
      console.error("❌ Post-build steps failed:", err);
      process.exit(1);
    }
  });
};

main();
