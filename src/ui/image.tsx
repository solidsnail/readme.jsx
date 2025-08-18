import * as Readme from "../jsx.js"

export const Image = ({ src, width }: { width?: string; src: string }) => {
    return <img src={src} width={width} />
}