export const Code = ({ code, inline = false, lang = "js" }: { code: string; inline?: boolean; lang?: string }) => {
    if (inline) {
        return `\`${code}\``
    }
    return `\n\n\`\`\`${lang}\n${code}\n\`\`\`\n\n`
}