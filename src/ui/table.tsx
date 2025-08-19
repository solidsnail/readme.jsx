import * as Readme from "../jsx.js"

export const Table = ({ rows }: {
    rows: Array<{
        width?: string;
        content: any
        type?: "td" | "th"
    }[]>
}) => {
    return <table>
        {rows.map((row) => {
            return <tr>
                {row.map(tdh => {
                    const Tagname = tdh.type || "td"
                    return <Tagname width={tdh.width}>
                        {tdh.content}
                    </Tagname>
                })}
            </tr>
        })}
    </table>
}