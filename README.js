import * as Readme from "readme.jsx/jsx.js";

import { UI } from "readme.jsx/ui";
import packageJson from "./package.json" with { type: "json" };
const color = "#3b82f6";
const Logo = () => {
    const distUrl = "./assets/readme-svg/logo.svg";
    return (Readme.createElement(UI.Svg, { distUrl: distUrl, viewBox: "0 0 800 150", keyframes: [
            {
                name: "dotBounce",
                frames: [
                    { percent: "0%", style: { transform: "scale(1)" } },
                    { percent: "50%", style: { transform: "scale(1.5)" } },
                    { percent: "100%", style: { transform: "scale(1)" } },
                ],
            },
            {
                name: "fadeIn",
                frames: [
                    { percent: "0%", style: { opacity: "0" } },
                    { percent: "100%", style: { opacity: "1" } },
                ],
            },
        ], style: {
            container: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 120,
                background: "transparent",
                textAlign: "center",
                position: "relative",
            },
            title: {
                fontSize: "64px",
                fontWeight: "800",
                letterSpacing: "-1px",
                animation: "fadeIn 0.8s ease-out",
                position: "relative",
                fontFamily: "system-ui",
            },
            jsx: {
                fontWeight: "300",
                opacity: 0.7,
                position: "relative",
                position: "absolute",
                top: "40px",
                right: "-70px",
                fontFamily: "system-ui",
            },
            dot: {
                position: "absolute",
                top: "22px",
                left: "2px",
                width: "8px",
                height: "8px",
                backgroundColor: color,
                borderRadius: "50%",
                animation: "dotBounce 2s ease-in-out infinite",
                fontFamily: "system-ui",
            },
        }, html: `<div id="container">
    <h1 id="title">README<span id="jsx">jsx<span id="dot"></span></span></h1>
</div>` }));
};
export default (Readme.createElement(Readme.Fragment, null,
    Readme.createElement(UI.Center, null,
        Readme.createElement(Logo, null)),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Center, null,
        Readme.createElement(UI.Badge, { variant: "flat-square", rightColor: color.replace("#", ""), leftText: "version", rightText: packageJson.version })),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Center, null,
        Readme.createElement(UI.Paypal, { id: "X3MWorks" })),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.NumberHeading, { text: "What is README.jsx?", number: 1 }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Bold, { text: "README.jsx" }),
    " is a JSX-to-Markdown compiler. Instead of wrestling with raw Markdown syntax, you can use familiar",
    " ",
    Readme.createElement(UI.Bold, { text: "JSX components" }),
    " to generate your documentation.",
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Br, null),
    " This makes documentations:",
    Readme.createElement(UI.List, { list: [
            "💨 Faster to write",
            "⭕ Consistent across projects",
            "👶 Easier to maintain",
        ] }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.NumberHeading, { text: "Usage", number: 2 }),
    Readme.createElement(UI.Terminal, { code: "npx readme.jsx ./README.jsx", distUrl: "./assets/readme-svg/terminal-usage.svg" }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.NumberHeading, { text: "Quick Start", number: 3 }),
    "Create a ",
    Readme.createElement(UI.Code, { code: "README.jsx", inline: true }),
    " file:",
    Readme.createElement(UI.Code, { code: `import { UI } from "readme.jsx"

export default <>
    <UI.Heading text="My Awesome Project" />

    <UI.Alert type="TIP" text="This README was written in JSX!" />

    <UI.List list={[
        "Easy to write",
        "Type-safe",
        "Maintainable"
    ]} />

    <UI.Code code={\`console.log("Hello, README.jsx!")\`} lang="javascript" />
</>`, lang: "jsx" }),
    "Compile to Markdown:",
    Readme.createElement(UI.Code, { code: "npx readme.jsx ./README.jsx", lang: "bash" }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.NumberHeading, { text: "Available UI", number: 4 }),
    Readme.createElement(UI.Table, { rows: [
            [
                {
                    content: "Name",
                    type: "th",
                },
                {
                    content: "Code",
                    type: "th",
                },
                {
                    content: "Preview",
                    type: "th",
                },
            ],
            [
                {
                    content: "Bold",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Bold text='Hello' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Bold, { text: "Hello" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Italic",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Italic text='Hello' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Italic, { text: "Hello" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Strikethrough",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.StrikeThrough text='Hello' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.StrikeThrough, { text: "Hello" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Inline Code",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Code inline code='console.log()' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Code, { inline: true, code: "console.log()" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Code Block",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Code lang='js' code='const x = 1;' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Code, { lang: "js", code: "const x = 1;" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Link",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Code inline code='console.log()' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Link, { link: "#hello", description: "Click me" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Heading",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Heading text='Title' order={2} />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Heading, { text: "Title", order: 2 }),
                    type: "td",
                },
            ],
            [
                {
                    content: "List",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.List list={['Item 1', 'Item 2']} />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.List, { list: ["Item 1", "Item 2"] }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Ordered List",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.List list={['First', 'Second']} ordered />" })),
                    type: "td",
                },
                {
                    content: (Readme.createElement(Readme.Fragment, null,
                        Readme.createElement(UI.Br, null),
                        Readme.createElement(UI.Br, null),
                        Readme.createElement(UI.List, { ordered: true, list: ["First", "Second"] }))),
                    type: "td",
                },
            ],
            [
                {
                    content: "Image",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Image src='logo.png' width='100px' />" })),
                    type: "td",
                },
                {
                    content: "![](logo.png)",
                    type: "td",
                },
            ],
            [
                {
                    content: "Alert Note",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Alert type='NOTE' text='Note info' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Alert, { type: "NOTE", text: "Note info" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Alert Important",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Alert type='IMPORTANT' text='Important info' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Alert, { type: "IMPORTANT", text: "Important info" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Alert Caution",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Alert type='CAUTION' text='Cautious note' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Alert, { type: "CAUTION", text: "Important info" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Alert Warning",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Alert type='WARNING' text='Be careful!' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Alert, { type: "WARNING", text: "Be careful!" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Alert Tip",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Alert type='TIP' text='Pro tip here' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Alert, { type: "TIP", text: "Pro tip here" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Tasks",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Tasks list={[{content: 'Done', done: true}]} />" })),
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Tasks, { list: [
                            { content: "Done", done: true },
                            { content: "Todo", done: false },
                        ] })),
                    type: "td",
                },
            ],
            [
                {
                    content: "Keyboard Key",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Kbd text='Ctrl+C' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Kbd, { text: "Ctrl+C" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Subscript",
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Sub text='2' />" }),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Sub, { text: "2" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Supscript",
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Sup text='2' />" }),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Sup, { text: "2" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Emoji",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Emoji emjoji=':arrow_backward:' />" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Emoji, { emjoji: ":arrow_backward:" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Horizontal Rule",
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Hr />" }),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Hr, null),
                    type: "td",
                },
            ],
            [
                {
                    content: "Line Break",
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Br />" }),
                    type: "td",
                },
                {
                    content: "↵ (new line)",
                    type: "td",
                },
            ],
            [
                {
                    content: "Center Align",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Center>Content</UI.Center>" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Center, null, "Centered Text"),
                    type: "td",
                },
            ],
            [
                {
                    content: "Boxed Content",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: "<UI.Boxed>Content</UI.Boxed>" })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Boxed, null, "Boxed Text"),
                    type: "td",
                },
            ],
            [
                {
                    content: "Badge",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: `<UI.Badge leftText="The badge" rightText="Suffix" leftColor="${color}" rightColor="red" />` })),
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Badge, { leftText: "The badge", rightText: "Suffix", leftColor: color, rightColor: "red" })),
                    type: "td",
                },
            ],
            [
                {
                    content: "Terminal",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: `<UI.Terminal code="npx example" />` })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Terminal, { code: "npx example" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Number Heading",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: `<UI.NumberHeading text="Usage" number={2} />` })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.NumberHeading, { text: "Usage", number: 2 }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Paypal",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: `<UI.Paypal id="YOUR_ID" />` })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Paypal, { id: "X3MWorks" }),
                    type: "td",
                },
            ],
            [
                {
                    content: "Accordion",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: `<UI.Accordion title="Title">
                    <UI.Bold text="Content" />
                </UI.Accordion>` })),
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Accordion, { title: "Title" },
                        Readme.createElement(UI.Bold, { text: "Content" }))),
                    type: "td",
                },
            ],
            [
                {
                    content: "Tag",
                    type: "td",
                },
                {
                    content: (Readme.createElement(UI.Code, { lang: "jsx", inline: true, code: `<UI.Tag type="wordpress" />` })),
                    type: "td",
                },
                {
                    content: Readme.createElement(UI.Tag, { type: "wordpress" }),
                    type: "td",
                },
            ],
        ] }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.NumberHeading, { text: "Advanced Example:", number: 5 }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Heading, { order: 3, text: "Animated SVG" }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Code, { code: `<UI.Svg
    distUrl="./assets/myanimated-title.svg"
    viewBox="0 0 800 100"
    keyframes={[
        {
            name: "fadeIn",
            frames: [
                { percent: "0%", style: { opacity: "0" } },
                { percent: "100%", style: { opacity: "1" } }
            ]
        }
    ]}
    style={{
        title: {
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "monospace",
            animation: "fadeIn 1s ease-in-out infinite"
        }
    }}
    html={\`<h1 id="title">Animated Title</h1>\`}
/>`, lang: "jsx" }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Svg, { distUrl: "./assets/myanimated-title.svg", viewBox: "0 0 800 100", keyframes: [
            {
                name: "fadeIn",
                frames: [
                    { percent: "0%", style: { opacity: "0" } },
                    { percent: "100%", style: { opacity: "1" } },
                ],
            },
        ], style: {
            title: {
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: "monospace",
                animation: "fadeIn 1s ease-in-out infinite",
            },
        }, html: `<h1 id="title">Animated Title</h1>` }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Hr, null),
    Readme.createElement(UI.Heading, { order: 3, text: "Import package.json values" }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Code, { code: `import packageJson from "./package.json" with  { type: "json" };

 <UI.Badge leftText="version" rightText={packageJson.version} />`, lang: "jsx" }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.NumberHeading, { text: "Configuration", number: 6 }),
    "Add these scripts to your ",
    Readme.createElement(UI.Code, { code: "package.json", inline: true }),
    ":",
    Readme.createElement(UI.Code, { code: `{
  "scripts": {
    "readme": "npx readme.jsx README.jsx",
    "readme:watch": "npx readme.jsx README.jsx --watch"
  }
}`, lang: "json" }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.NumberHeading, { text: "Benefits", number: 7 }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.List, { list: [
            "🔧 **IDE Support** - Full IntelliSense and autocomplete",
            "♻️ **Reusability** - Create custom components and templates",
            "🎨 **Rich Styling** - Advanced layouts and animations",
            "📱 **Responsive** - Built-in responsive design patterns",
            "⚡ **Fast** - Efficient compilation to standard Markdown",
        ] }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.NumberHeading, { text: "Contributing", number: 8 }),
    "We welcome contributions! Here's how you can help:",
    Readme.createElement(UI.Tasks, { list: [
            { content: "🍴 Fork the repository", done: true },
            { content: "🌿 Create a feature branch", done: true },
            { content: "💡 Add your amazing feature", done: false },
            { content: "✅ Write tests", done: false },
            { content: "📝 Update documentation", done: false },
            { content: "🚀 Submit a pull request", done: false },
        ] }),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.Br, null),
    Readme.createElement(UI.NumberHeading, { text: "License", number: 9 }),
    "This project is licensed under the MIT License - see the LICENSE file for details.",
    Readme.createElement(UI.Br, null)));
