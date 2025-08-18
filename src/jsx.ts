
function propsToString(props: Record<string, any>): string {
    return Object.entries(props)
        .map(([key, value]) => {
            if (typeof value === "boolean") {
                return value ? key : "";
            }
            if (value == null) {
                return "";
            }
            return `${key}="${String(value).replace(/"/g, '&quot;')}"`;
        })
        .filter(Boolean)
        .join(" ");
}


const createElement = (tagName: string | Function, props: Record<string, any>, children: string) => {
    console.log({ props });
    console.log({ children })

    switch (typeof tagName) {
        case "string":
            if (["img"].includes(tagName)) {
                return `<${tagName} ${propsToString(props)} />`
            }
            return `<${tagName} ${propsToString(props)}>${children}</${tagName}>`

        default:
            return tagName({
                ...(props || {}),
                children
            })
    }
}

export {
    createElement
}