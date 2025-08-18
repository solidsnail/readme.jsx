
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


const createElement = (tagName: undefined | string | Function, props: Record<string, any>, ...childs: any[]) => {
    const children = childs.flat().join(""); // Flatten and join children
    console.log({ tagName: tagName?.toString(), props, children })
    switch (typeof tagName) {
        case "string":
            if (["img"].includes(tagName as string)) {
                return `<${tagName} ${propsToString(props)} />`
            }
            return `<${tagName} ${propsToString(props)}>${children}</${tagName}>`
        case "undefined":
            return children
        default:
            return (tagName as Function)({
                ...(props || {}),
                children
            })
    }
}

const Fragment = ({ children }: { children: string }) => {
    return children
}

export {
    createElement,
    Fragment
}