import * as Readme from "../jsx.js"

export const Accordion = ({ title, children }: { title: string; children: any }) => {
    return <details>
        <summary>{title}</summary>
        {children}
    </details>
}