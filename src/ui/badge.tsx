// src/ui/badge.tsx
export const Badge = ({
    leftText,
    rightText,
    leftColor = "black",
    rightColor = "blue",
    variant = "for-the-badge"
}: {
    leftText: string;
    rightText?: string;
    leftColor?: string;
    rightColor?: string;
    variant?: "for-the-badge" | "plastic" | "social" | "flat-square" | "flat"
}) => {

    const right = rightText ? "-" + encodeURIComponent(rightText) : ""
    const rightC = rightColor ? `-${rightColor}` : ""
    return `<img src="https://img.shields.io/badge/${encodeURIComponent(leftText)}${right}${rightC}?style=${variant}&labelColor=${encodeURIComponent(leftColor)}&color=${encodeURIComponent(rightColor)}" alt="${leftText}" />`;
}