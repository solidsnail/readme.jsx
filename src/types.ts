declare global {
    namespace JSX {
        interface IntrinsicElements {
            div: {}
            table: {}
            tr: {}
            td: {}
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