import path from "path";
import * as Readme from "../jsx.js";
import { writeDeep } from "../helpers.js";
import { Image } from "./image.js";

type CSSValue = string | number;
type CSSRules = Partial<CSSStyleDeclaration>;
type StyleMap = Record<string, CSSRules>;
type Keyframe = {
  name: string;
  frames: Array<{ percent: string; style: CSSRules }>;
};

// ---------- utils ----------
function camelToKebab(str: string) {
  return str.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

// CSS properties that are unitless when numeric
const UNITLESS = new Set([
  "lineHeight",
  "fontWeight",
  "opacity",
  "zIndex",
  "flex",
  "flexGrow",
  "flexShrink",
  "order",
  "zoom",
  "animationIterationCount",
]);

function formatValue(prop: string, value: CSSValue) {
  if (typeof value === "number" && !UNITLESS.has(prop)) return `${value}px`;
  return String(value);
}

function rulesToCss(rules: CSSRules) {
  return Object.entries(rules)
    .map(([k, v]) => `${camelToKebab(k)}: ${formatValue(k, v as CSSValue)};`)
    .join(" ");
}

function normalizeSelector(selector: string) {
  // If the user already passed "#title" or a complex selector, respect it.
  if (
    /^[#.[\w-]/.test(selector) &&
    (selector.startsWith("#") ||
      selector.startsWith(".") ||
      selector.startsWith("["))
  ) {
    return selector;
  }
  // Default to ID selectors
  return `#${selector}`;
}

export const Svg = ({
  width,
  distUrl,
  style,
  html,
  viewBox = "0 0 800 400",
  keyframes = [],
}: {
  distUrl: string;
  width?: string;
  viewBox?: string;
  keyframes?: Keyframe[];
  style: StyleMap;
  html: string;
}) => {
  const keyframesCSS = keyframes
    .map(
      ({ name, frames }) =>
        `@keyframes ${name} {
${frames
  .map(({ percent, style }) => `  ${percent} { ${rulesToCss(style)} }`)
  .join("\n")}
}`,
    )
    .join("\n\n");

  const styleCSS = Object.entries(style)
    .map(([selector, rules]) => {
      const cssSelector = normalizeSelector(selector); // → "#container", "#title", "#subtitle", etc.
      return `${cssSelector} { ${rulesToCss(rules)} }`;
    })
    .join("\n");

  const code = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="${viewBox}">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
${keyframesCSS}

${styleCSS}
      </style>
${html}
    </div>
  </foreignObject>
</svg>`;
  const projectRoot = process.cwd();
  const distUrlPath = path.join(projectRoot, distUrl);
  writeDeep(distUrlPath, code);
  return <Image width={width} src={distUrl} />;
};
