import { UI } from "./dist/ui/index.js"

const Logo = () => <UI.Svg
    url="./assets/readme-svg/logo.svg"
    width="300px"
    keyframes={[
        {
            name: "typing",
            frames: [
                { percent: "0%", style: { width: "0ch" } },
                { percent: "100%", style: { width: "12ch" } },
            ]
        },
        {
            name: "blinkCaret",
            frames: [
                { percent: "0%", style: { borderColor: "transparent" } },
                { percent: "50%", style: { borderColor: "currentColor" } },
                { percent: "100%", style: { borderColor: "transparent" } },
            ]
        },
        {
            name: "textWave",
            frames: [
                { percent: "0%", style: { transform: "translateY(0px)" } },
                { percent: "50%", style: { transform: "translateY(-10px)" } },
                { percent: "100%", style: { transform: "translateY(0px)" } },
            ]
        },
        {
            name: "colorCycle",
            frames: [
                { percent: "0%", style: { color: "#fc5c7d" } },
                { percent: "33%", style: { color: "#6a82fb" } },
                { percent: "66%", style: { color: "#05dfd7" } },
                { percent: "100%", style: { color: "#fc5c7d" } },
            ]
        },
        {
            name: "fadeIn",
            frames: [
                { percent: "0%", style: { opacity: "0" } },
                { percent: "100%", style: { opacity: "1" } },
            ]
        },
    ]}
    style={{
        container: {
            fontFamily: 'system-ui, monospace',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            width: '100%',
            height: 400,
            background: 'transparent',
            textAlign: 'center',
        },
        title: {
            fontSize: "80px",
            fontWeight: "bold",
            lineHeight: 1.3,
            letterSpacing: 5,
            textTransform: 'uppercase',
            whiteSpace: "nowrap",
            overflow: "hidden",
            borderRight: "4px solid currentColor",
            width: "0ch",
            animation:
                "typing 2s steps(12, end) forwards, " +
                "blinkCaret 0.7s step-end infinite, " +
                "textWave 3s ease-in-out infinite 2s, " +
                "colorCycle 6s linear infinite 2s",
        },
        subtitle: {
            fontSize: "32px",
            marginTop: "15px",
            fontFamily: "monospace",
            opacity: 0,
            animation: 'fadeIn 2s ease forwards 3s',
        }
    }}
    html={`<div id="container">
    <h1 id="title">README.jsx</h1>
    <p id="subtitle">The JSX to Markdown compiler</p>
</div>`}
/>


export default <>
    <UI.Center>
        <Logo />
    </UI.Center>

    <UI.Br />
    <UI.Br />

    <UI.Alert type="TIP" text="Write your README files using JSX syntax and compile them to beautiful Markdown!" />

    <UI.Br />

    <UI.Heading text="🚀 What is README.jsx?" order={2} />

    README.jsx is a powerful JSX-to-Markdown compiler that revolutionizes how you write documentation. Instead of wrestling with raw Markdown syntax, you can use familiar JSX components to create beautiful, maintainable README files.

    <UI.Br />

    <UI.Heading text="✨ Features" order={2} />

    <UI.List list={[
        "📝 Write README files using JSX syntax",
        "🎨 Rich UI components for better documentation",
        "🔧 TypeScript support out of the box",
        "📱 Responsive layouts with built-in components",
        "🎭 Animated SVG generation capabilities",
        "📊 Tables, lists, and interactive elements",
        "🎯 Type-safe component props",
        "⚡ Fast compilation to standard Markdown"
    ]} />

    <UI.Br />

    <UI.Heading text="📦 Installation" order={2} />

    <UI.Code code={`npm install readme.jsx`} lang="bash" />

    <UI.Br />

    <UI.Heading text="🏃‍♂️ Quick Start" order={2} />

    Create a <UI.Code code="README.jsx" inline /> file:

    <UI.Code code={`import { UI } from "readme.jsx"

export default <>
    <UI.Heading text="My Awesome Project" />
    
    <UI.Alert type="TIP" text="This README was written in JSX!" />
    
    <UI.List list={[
        "Easy to write",
        "Type-safe",
        "Maintainable"
    ]} />
    
    <UI.Code code={\`console.log("Hello, README.jsx!")\`} lang="javascript" />
</>`} lang="jsx" />

    Compile to Markdown:

    <UI.Code code="npx ./README.jsx" lang="bash" />

    <UI.Br />

    <UI.Heading text="🧩 Available Components" order={2} />

    <UI.Accordion title="Text Formatting">
        <UI.List list={[
            `${UI.Bold({ text: "Bold" })} - **Bold text**`,
            `${UI.Italic({ text: "Italic" })} - *Italic text*`,
            `${UI.StrikeThrough({ text: "Strikethrough" })} - ~~Strikethrough text~~`,
            `${UI.Code({ code: "inline code", inline: true })} - Inline code`,
        ]} />
    </UI.Accordion>

    <UI.Accordion title="Layout Components">
        <UI.List list={[
            "<UI.Center> - Center align content",
            "<UI.Boxed> - Put content in a table box",
            "<UI.Br /> - Line break",
            "<UI.Hr /> - Horizontal rule"
        ]} />
    </UI.Accordion>

    <UI.Accordion title="Content Components">
        <UI.List list={[
            "<UI.Heading> - Create headings (h1-h6)",
            "<UI.List> - Ordered and unordered lists",
            "<UI.Image> - Images with width support",
            "<UI.Link> - Clickable links",
            "<UI.Table> - Rich tables with custom widths",
            "<UI.Tasks> - GitHub-style task lists"
        ]} />
    </UI.Accordion>

    <UI.Accordion title="Interactive Components">
        <UI.List list={[
            "<UI.Accordion> - Collapsible sections",
            "<UI.Alert> - GitHub-style alerts (NOTE, TIP, WARNING, etc.)",
            "<UI.Kbd> - Keyboard key styling",
            "<UI.Emoji> - Emoji support"
        ]} />
    </UI.Accordion>

    <UI.Accordion title="Advanced Components">
        <UI.List list={[
            "<UI.Svg> - Generate animated SVGs with CSS keyframes",
            "<UI.Code> - Syntax-highlighted code blocks",
            "<UI.Sub> - Subscript text",
            "<UI.Sup> - Superscript text"
        ]} />
    </UI.Accordion>

    <UI.Br />

    <UI.Heading text="🎨 Advanced Example: Animated SVG" order={2} />

    Create stunning animated graphics directly in your README:

    <UI.Code code={`<UI.Svg
    url="./logo.svg"
    width="300px"
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
            fontSize: "48px",
            fontWeight: "bold",
            animation: "fadeIn 2s ease-in-out"
        }
    }}
    html={\`<h1 id="title">Animated Title</h1>\`}
/>`} lang="jsx" />

    <UI.Br />

    <UI.Heading text="📋 Example: Rich Table" order={2} />

    <UI.Table rows={[
        [
            { content: UI.Bold({ text: "Component" }), type: "th", width: "30%" },
            { content: UI.Bold({ text: "Description" }), type: "th", width: "50%" },
            { content: UI.Bold({ text: "Example" }), type: "th", width: "20%" }
        ],
        [
            { content: UI.Code({ code: "<UI.Alert>", inline: true }) },
            { content: "GitHub-style callout boxes" },
            { content: UI.Alert({ type: "NOTE", text: "Like this!" }).trim() }
        ],
        [
            { content: UI.Code({ code: "<UI.Tasks>", inline: true }) },
            { content: "Interactive task lists" },
            { content: "- [x] Done\n- [ ] Todo" }
        ],
        [
            { content: UI.Code({ code: "<UI.Kbd>", inline: true }) },
            { content: "Keyboard key styling" },
            { content: "Press Ctrl+C" }
        ]
    ]} />

    <UI.Br />

    <UI.Heading text="⚙️ Configuration" order={2} />

    Add these scripts to your <UI.Code code="package.json" inline />:

    <UI.Code code={`{
  "scripts": {
    "readme": "npx readme.jsx README.jsx",
    "readme:watch": "npx readme.jsx README.jsx --watch"
  }
}`} lang="json" />

    <UI.Br />

    <UI.Heading text="🎯 Why Choose README.jsx?" order={2} />

    <UI.Boxed>
        <UI.Center>
            <UI.Bold text="Traditional Markdown" />
            <UI.Br />
            <UI.Code code={`# My Project

> **Note**
> This is a note

- Item 1
- Item 2

\`\`\`javascript
console.log("Hello");
\`\`\``} lang="markdown" />
        </UI.Center>
    </UI.Boxed>

    <UI.Center>
        <UI.Bold text="VS" />
    </UI.Center>

    <UI.Boxed>
        <UI.Center>
            <UI.Bold text="README.jsx" />
            <UI.Br />
            <UI.Code code={`<UI.Heading text="My Project" />

<UI.Alert type="NOTE" text="This is a note" />

<UI.List list={["Item 1", "Item 2"]} />

<UI.Code code='console.log("Hello");' lang="javascript" />`} lang="jsx" />
        </UI.Center>
    </UI.Boxed>

    <UI.Br />

    <UI.Heading text="🏆 Benefits" order={3} />

    <UI.List list={[
        "🔍 **Type Safety** - Catch errors at compile time",
        "🔧 **IDE Support** - Full IntelliSense and autocomplete",
        "♻️ **Reusability** - Create custom components and templates",
        "🎨 **Rich Styling** - Advanced layouts and animations",
        "📱 **Responsive** - Built-in responsive design patterns",
        "⚡ **Fast** - Efficient compilation to standard Markdown",
        "🧪 **Testable** - Unit test your documentation components"
    ]} />

    <UI.Br />

    <UI.Heading text="🤝 Contributing" order={2} />

    We welcome contributions! Here's how you can help:

    <UI.Tasks list={[
        { content: "🍴 Fork the repository", done: true },
        { content: "🌿 Create a feature branch", done: true },
        { content: "💡 Add your amazing feature", done: false },
        { content: "✅ Write tests", done: false },
        { content: "📝 Update documentation", done: false },
        { content: "🚀 Submit a pull request", done: false }
    ]} />

    <UI.Br />

    <UI.Heading text="📄 License" order={2} />

    This project is licensed under the MIT License - see the LICENSE file for details.

    <UI.Br />

    <UI.Hr />

    <UI.Center>
        <UI.Bold text="Made with ❤️ by the README.jsx team" />
        <UI.Br />
        <UI.Link link="https://github.com/readme-jsx/readme.jsx" description="⭐ Star us on GitHub" />
    </UI.Center>
</>