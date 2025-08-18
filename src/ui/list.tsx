
export const List = ({ list }: { list: any[] }) => {
    return list.map(item => `- ${item}`).join("\n")
}