export const Heading = ({ text, order = 1 }: { text: string; order?: 1 | 2 | 3 | 4 | 5 | 6 }) => {
    return `${"#".repeat(order)} ${text}`
}