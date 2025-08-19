export const Tasks = ({ list }: {
    list: {
        content: string;
        done: boolean
    }[]
}) => {
    return "\n" + list.map(item => `- [${item.done ? "x" : " "}] ${item.content}`).join("\n")
}