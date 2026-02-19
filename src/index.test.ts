import { test } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { transpileJSX } from "./index.js";

test("transpileJSX transpiles JSX to JS", () => {
  // Create a temporary JSX file
  const testFile = path.join(process.cwd(), "test-transpile.jsx");
  fs.writeFileSync(testFile, 'export default <div class="test">Hello</div>');

  try {
    const result = transpileJSX(testFile);
    assert.ok(result.includes('Readme.createElement("div"'));
    assert.ok(result.includes('class: "test"'));
    assert.ok(result.includes('"Hello"'));
  } finally {
    if (fs.existsSync(testFile)) {
      fs.unlinkSync(testFile);
    }
  }
});

test("transpileJSX throws if file not found", () => {
  assert.throws(() => {
    transpileJSX("non-existent-file.jsx");
  }, /File not found/);
});
