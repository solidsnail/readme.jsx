
export const List = ({ list, ordered = false }: { list: any[], ordered?: boolean }) => {
    return "\n" + list.map((item , i) => `${ordered ? `${i+1}.` : "-"} ${item}`).join("\n") + "\n"
}