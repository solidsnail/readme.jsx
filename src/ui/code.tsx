export const Code = ({ code, inline = false, lang = "js" }: { code: string; inline?: boolean; lang?: string }) => {
    if (inline) {
        return `\`${code}\``
    }
    return `\`\`\`${lang}\n${code}\n\`\`\``
}