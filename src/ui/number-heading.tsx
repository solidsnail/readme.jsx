/* eslint-disable @typescript-eslint/no-unused-vars */
import { simpleHash } from "../helpers.js";
import * as Readme from "../jsx.js";
import { Svg } from "./svg.js";
const fontFamily = `var(--fontStack-sansSerif, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji")`;

export const NumberHeading = ({
  text,
  number,
  width = "100%",
  numberColor = "white",
  colors = {
    a: "#3b82f6",
    b: "#3b82f6",
    c: "#3b82f6",
    d: "#3b82f6",
    e: "#3b82f6",
  },
}: {
  width?: string;
  number: number;
  text: string;
  numberColor?: string;
  colors?: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
  };
}) => {
  const hash = simpleHash(`${text}-${number}`);
  const distUrl = `./assets/readme-svg/number-headings/${hash}.svg`;
  return (
    <Svg
      distUrl={distUrl}
      width={width}
      viewBox="0 0 800 100"
      keyframes={[
        {
          name: "gradientShift",
          frames: [
            { percent: "0%", style: { backgroundPosition: "0% 50%" } },
            { percent: "50%", style: { backgroundPosition: "100% 50%" } },
            { percent: "100%", style: { backgroundPosition: "0% 50%" } },
          ],
        },
        {
          name: "fadeIn",
          frames: [
            {
              percent: "0%",
              style: { opacity: "0", transform: "translateY(20px)" },
            },
            {
              percent: "100%",
              style: { opacity: "1", transform: "translateY(0)" },
            },
          ],
        },
      ]}
      style={{
        container: {
          width: "100%",
          height: "40px",
          display: "flex",
          alignItems: "center",
          margin: "24px 0",
          background: "transparent",
          animation: "fadeIn 0.8s ease-out",
        },
        circle: {
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: `linear-gradient(45deg, ${colors.a} 0%, ${colors.b} 25%, ${colors.c} 50%, ${colors.d} 75%, ${colors.e} 100%)`,
          backgroundSize: "300% 300%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "16px",
        },
        number: {
          color: numberColor,
          fontSize: "12px",
          fontWeight: "bold",
          fontFamily,
        },
        text: {
          fontSize: "24px",
          fontWeight: "800",
          color: "#2c3e50",
          fontFamily,
          margin: "0",
        },
      }}
      html={`<div id="container">
        <div id="circle">
            <span id="number">${number}</span>
        </div>
        <h2 id="text">${text}</h2>
    </div>`}
    />
  );
};
