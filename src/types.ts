declare global {
    namespace JSX {
        interface IntrinsicElements {
            div: {}
            p: { align: string }
            img: {
                src: string
            }
        }
    }
}