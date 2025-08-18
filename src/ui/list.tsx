
export const List = ({ list }: { list: any[] }) => {
    return "\n" + list.map(item => `- ${item}`).join("\n") + "\n"
}