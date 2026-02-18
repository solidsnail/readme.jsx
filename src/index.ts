#!/usr/bin/env node
import fs from "fs";
import ts from "typescript";
import path from "path";
import prettier from "prettier";
import { writeDeep } from "./helpers.js";

const [, , filepath, ...args] = process.argv;
const watchMode = args.includes("--watch");

/**
 * Transpiles a JSX file using the TypeScript compiler.
 * @param filePath - Path to the .jsx file
 * @returns Transpiled JavaScript code as a string
 */
export function transpileJSX(filePath: string): string {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const jsxCode = fs.readFileSync(filePath, "utf8");

  const transpileOptions: ts.TranspileOptions = {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      jsxFactory: "Readme.createElement",
      jsx: ts.JsxEmit.React,
      jsxFragmentFactory: "Readme.Fragment",
      target: ts.ScriptTarget.ES2020,
      allowJs: true,
      esModuleInterop: true,
      resolveJsonModule: true,
    },
    fileName: path.basename(filePath),
  };

  const result = ts.transpileModule(jsxCode, transpileOptions);
  return result.outputText;
}

async function build() {
  try {
    const projectRoot = process.cwd();
    const readmeJSPath = path.join(projectRoot, "README.js");
    const readmeMDPath = path.join(projectRoot, "README.md");
    const content =
      'import * as Readme from "readme.jsx/jsx.js";\n\n' +
      transpileJSX(filepath);
    writeDeep(readmeJSPath, content);

    const mod = await import(
      new URL(readmeJSPath, import.meta.url).toString() + `?t=${Date.now()}`
    );
    const formatted = await prettier.format(mod.default, {
      parser: "markdown",
    });

    fs.rmSync(readmeJSPath);
    writeDeep(readmeMDPath, formatted);

    console.log("✅ Built README.md");
  } catch (error) {
    console.error("❌ Build failed:", error);
  }
}

if (watchMode) {
  console.log(`👀 Watching for changes in ${filepath}...`);
  fs.watchFile(filepath, { interval: 500 }, () => {
    console.log("🔄 Change detected, rebuilding...");
    build();
  });
  build();
} else {
  build();
}
