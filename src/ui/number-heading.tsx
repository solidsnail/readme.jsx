import * as Readme from "../jsx.js"
import { Svg } from "./svg.js";

export const NumberHeading = ({ text, number, width = "100%", }: { width?: string, number: number; text: string; }) => {
    const distUrl = `./assets/readme-svg/number-heading-${number}.svg`
    return <Svg
        distUrl={distUrl}
        width={width}
        viewBox="0 0 800 100"
        keyframes={[
            {
                name: "gradientShift",
                frames: [
                    { percent: "0%", style: { backgroundPosition: "0% 50%" } },
                    { percent: "50%", style: { backgroundPosition: "100% 50%" } },
                    { percent: "100%", style: { backgroundPosition: "0% 50%" } }
                ]
            },
            {
                name: "fadeIn",
                frames: [
                    { percent: "0%", style: { opacity: "0", transform: "translateY(20px)" } },
                    { percent: "100%", style: { opacity: "1", transform: "translateY(0)" } }
                ]
            }
        ]}
        style={{
            container: {
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                margin: "24px 0",
                background: "transparent",
                animation: "fadeIn 0.8s ease-out"
            },
            circle: {
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
                backgroundSize: "300% 300%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "16px",
                animation: "gradientShift 3s ease infinite"
            },
            number: {
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
                fontFamily: "system-ui, sans-serif"
            },
            text: {
                fontSize: "24px",
                fontWeight: "600",
                color: "#2c3e50",
                fontFamily: "system-ui, sans-serif",
                margin: "0"
            }
        }}
        html={`<div id="container">
        <div id="circle">
            <span id="number">${number}</span>
        </div>
        <h2 id="text">${text}</h2>
    </div>`}
    />
}