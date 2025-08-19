declare global {
    namespace JSX {
        interface IntrinsicElements {
            div: {
                xmlns?: string
                class?: string
            }
            table: {}
            tr: {}
            kbd: {}
            details: {}
            summary: {}
            style: {}
            h1: {}
            svg: {
                xmlns: string
                fill: string
                viewBox: string
            }
            foreignObject: { width: string; height: string }
            td: { width?: string }
            th: { width?: string }
            sub: {}
            sup: {}
            p: { align?: "left" | "center" | "right" }
            img: {
                src: string
                width?: string
            }
        }
    }
}