declare global {
    namespace JSX {
        interface IntrinsicElements {
            div: {}
            table: {}
            tr: {}
            kbd: {}
            details: {}
            summary: {}
            td: { width?: string }
            th: { width?: string }
            sub: {}
            sup: {}
            p: { align: "left" | "center" | "right" }
            img: {
                src: string
                width?: string
            }
        }
    }
}