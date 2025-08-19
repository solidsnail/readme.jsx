import * as Readme from "../jsx.js"
import { Svg } from "./svg.js";

export const Terminal = ({ code, color = "#7c3aed", width = "100%", distUrl = "./assets/readme-svg/terminal.svg" }: { width?: string, code: string; distUrl: string; color?: string }) => {
    return <Svg
        distUrl={distUrl}
        width={width}
        viewBox="0 0 800 50"
        keyframes={[
            {
                name: "typing",
                frames: [
                    { percent: "0%", style: { width: "0ch" } },
                    { percent: "100%", style: { width: "28ch" } }
                ]
            },
            {
                name: "blink",
                frames: [
                    { percent: "0%", style: { opacity: "1" } },
                    { percent: "50%", style: { opacity: "0" } },
                    { percent: "100%", style: { opacity: "1" } }
                ]
            }
        ]}
        style={{
            terminal: {
                backgroundColor: "#0d1117",
                border: "1px solid #30363d",
                borderRadius: "6px",
                padding: "16px",
                fontFamily: "'SF Mono', Monaco, 'Cascadia Code', monospace",
                fontSize: "14px",
                maxWidth: "500px",
            },
            line: {
                color: "#e6edf3",
            },
            prompt: {
                color,
                fontWeight: "bold"
            },
            command: {
                color: "#e6edf3",
                whiteSpace: "nowrap",
                overflow: "hidden",
                display: "inline-block",
                width: "0ch",
                animation: "typing 2.5s steps(28) 0.5s forwards"
            },
            cursor: {
                color,
                animation: "blink 1s infinite",
                marginLeft: "1px"
            }
        }}
        html={`<div id="terminal">
    <div id="line">
        <span id="prompt">$ </span>
        <span id="command">${code}</span>
        <span id="cursor">▎</span>
    </div>
</div>`}
    />
}