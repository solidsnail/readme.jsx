export const Link = ({ link, description }: { link: string, description: string }) => {
    return `[${description}](${link})`
}