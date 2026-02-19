import { test } from "node:test";
import assert from "node:assert";
import { createElement, Fragment } from "./jsx.js";

test("createElement creates a simple tag", () => {
  const result = createElement("div", { class: "foo" }, "hello");
  assert.strictEqual(result, '<div class="foo">hello</div>');
});

test("createElement creates a void tag", () => {
  const result = createElement("img", { src: "foo.png" });
  assert.strictEqual(result, '<img src="foo.png" />');
});

test("createElement handles boolean props", () => {
  const result = createElement("input", { checked: true, disabled: false });
  assert.strictEqual(result, "<input checked></input>");
});

test("Fragment returns children", () => {
  const result = Fragment({ children: "hello world" });
  assert.strictEqual(result, "hello world");
});

test("createElement handles functional components", () => {
  const Card = ({ title, children }: { title: string; children: string }) =>
    `[${title}] ${children}`;
  const result = createElement(Card as any, { title: "Title" }, "Content");
  assert.strictEqual(result, "[Title] Content");
});
