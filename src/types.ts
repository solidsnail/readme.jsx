declare global {
    namespace JSX {
        interface IntrinsicElements {
            div: {}
            table: {}
            tr: {}
            td: {}
            sub: {}
            sup: {}
            p: { align: string }
            img: {
                src: string
                width?: string
            }
        }
    }
}