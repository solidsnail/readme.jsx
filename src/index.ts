#!/usr/bin/env node
import fs from "fs";
import ts from 'typescript';
import path from "path"
import prettier from "prettier"

const [, , filepath] = process.argv


/**
 * Transpiles a JSX file using the TypeScript compiler.
 * @param filePath - Path to the .jsx file
 * @returns Transpiled JavaScript code as a string
 */
export function transpileJSX(filePath: string): string {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }

    const jsxCode = fs.readFileSync(filePath, 'utf8');

    const transpileOptions: ts.TranspileOptions = {
        compilerOptions: {
            module: ts.ModuleKind.ESNext,
            jsxFactory: "Readme.createElement",
            jsx: ts.JsxEmit.React,
            jsxFragmentFactory: "Readme.Fragment",
            target: ts.ScriptTarget.ES2020,
            allowJs: true,
            esModuleInterop: true,
        },
        fileName: path.basename(filePath),
    };

    const result = ts.transpileModule(jsxCode, transpileOptions);
    return result.outputText;
}


const content = "import * as Readme from \"./dist/jsx.js\";\n\n" + transpileJSX(filepath)
fs.writeFileSync("./README.js", content, "utf-8")
import(new URL("../README.js", import.meta.url).toString()).then(async mod => {
    const formatted = await prettier.format(mod.default, {
        parser: "markdown",
    });
    fs.rmSync("./README.js")
    fs.writeFileSync("./TEST.md", formatted, "utf-8")
})