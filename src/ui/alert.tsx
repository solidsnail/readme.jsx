export const Alert = ({ type = "NOTE", text }: { type?: "NOTE" | "TIP" | "IMPORTANT" | "WARNING" | "CAUTION"; text: string }) => {
    return `\n> [!${type}]
> ${text}\n`
}