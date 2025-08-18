import test from "node:test";
import assert from "node:assert/strict";
import { ChatSDK } from "llmini.js/categories/chat";
import { setCacheDir } from "llmini.js";

setCacheDir("cached-models");

test("Should set withWorker to false on Nodejs", () => {
  const chatSDK = new ChatSDK("FastThink-0.5B-Tiny", {
    withWorker: true,
    device: "cpu",
  });
  assert.equal(chatSDK.withWorker, false);
});

test("Should throw when selecting an invalid device on Nodejs", async () => {
  const device = "webgpu";
  const sdk = new ChatSDK("FastThink-0.5B-Tiny", {
    device,
  });
  assert.rejects(
    async () => {
      await sdk.load();
    },
    {
      message: `Unsupported device: "${device}". Should be one of: dml, cpu.`,
      name: "Error",
    }
  );
});

test("Should load the model", async () => {
  const sdk = new ChatSDK("FastThink-0.5B-Tiny", {
    device: "cpu",
  });
  assert.doesNotReject(async () => {
    await sdk.load();
  });
});

test("Should respond", async () => {
  const sdk = new ChatSDK("FastThink-0.5B-Tiny", {
    device: "cpu",
    callbacks: {
      onResult(response) {
        assert.match(response.content, /The sky is blue because/);
      },
    },
  });
  await sdk.load();
  await sdk.prompt({
    prompt: "Why is the sky blue ?",
    settings: {
      maxTokens: 100,
    },
  });
});
