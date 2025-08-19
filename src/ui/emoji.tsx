import type { EMOJIS } from "../constants"

export const Emoji = ({ emjoji }: { emjoji: typeof EMOJIS[number] }) => {
    return `${emjoji}`
}