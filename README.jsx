import { UI } from "./dist/ui/index.js"
export default <>
    <UI.Svg
        url="./assets/readme-svg/logo.svg"
        keyframes={[
            {
                name: "typing",
                frames: [
                    { percent: "0%", style: { width: "0ch" } },
                    { percent: "100%", style: { width: "12ch" } }, // matches "README.jsx"
                ]
            },
            {
                name: "blinkCaret",
                frames: [
                    { percent: "0%", style: { borderColor: "transparent" } },
                    { percent: "50%", style: { borderColor: "currentColor" } },
                    { percent: "100%", style: { borderColor: "transparent" } },
                ]
            },
            {
                name: "textWave",
                frames: [
                    { percent: "0%", style: { transform: "translateY(0px)" } },
                    { percent: "50%", style: { transform: "translateY(-10px)" } },
                    { percent: "100%", style: { transform: "translateY(0px)" } },
                ]
            },
            {
                name: "colorCycle",
                frames: [
                    { percent: "0%", style: { color: "#fc5c7d" } },
                    { percent: "33%", style: { color: "#6a82fb" } },
                    { percent: "66%", style: { color: "#05dfd7" } },
                    { percent: "100%", style: { color: "#fc5c7d" } },
                ]
            },
            {
                name: "fadeIn",
                frames: [
                    { percent: "0%", style: { opacity: "0" } },
                    { percent: "100%", style: { opacity: "1" } },
                ]
            },
        ]}
        style={{
            container: {
                fontFamily: 'system-ui, monospace',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 0,
                width: '100%',
                height: 400,
                background: 'transparent', // ✅ no background
                textAlign: 'center',
            },
            title: {
                fontSize: "80px",
                fontWeight: "bold",
                lineHeight: 1.3,
                letterSpacing: 5,
                textTransform: 'uppercase',
                whiteSpace: "nowrap",
                overflow: "hidden",
                borderRight: "4px solid currentColor",
                width: "0ch",
                animation:
                    "typing 2s steps(12, end) forwards, " + // typewriter effect
                    "blinkCaret 0.7s step-end infinite, " + // blinking caret
                    "textWave 3s ease-in-out infinite 2s, " + // wave after typing
                    "colorCycle 6s linear infinite 2s",     // color change
            },
            subtitle: {
                fontSize: "32px",
                marginTop: "15px",
                fontFamily: "monospace",
                opacity: 0,
                animation: 'fadeIn 2s ease forwards 3s',
            }
        }}
        html={`<div id="container">
    <h1 id="title">README.jsx</h1>
    <p id="subtitle">The jsx to md compiler</p>
</div>`}
    />
    <UI.Br />
    <UI.Br />


</>
