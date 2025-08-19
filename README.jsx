import { UI } from "./dist/ui/index.js"

const Logo = () => {
    const distUrl = "./assets/readme-svg/logo.svg"
    return < UI.Svg
        distUrl={distUrl}
        width="300px"
        keyframes={
            [
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
        }
        }
        html={`<div id="container">
    <h1 id="title">README.jsx</h1>
    <p id="subtitle">The JSX to Markdown compiler</p>
</div>`}
    />
}
const NumberedHeading = ({ text, number, width = "100%" }) => {
    const distUrl = `./assets/readme-svg/headings/numbered-heading-${number}.svg`;

    return <UI.Svg
        distUrl={distUrl}
        width={width}
        viewBox="0 0 800 100"
        keyframes={[
            {
                name: "gradientShift",
                frames: [
                    { percent: "0%", style: { backgroundPosition: "0% 50%" } },
                    { percent: "50%", style: { backgroundPosition: "100% 50%" } },
                    { percent: "100%", style: { backgroundPosition: "0% 50%" } }
                ]
            },
            {
                name: "fadeIn",
                frames: [
                    { percent: "0%", style: { opacity: "0", transform: "translateY(20px)" } },
                    { percent: "100%", style: { opacity: "1", transform: "translateY(0)" } }
                ]
            }
        ]}
        style={{
            container: {
                width: "100%",
                height: "60px",
                display: "flex",
                alignItems: "center",
                margin: "24px 0",
                background: "transparent",
                animation: "fadeIn 0.8s ease-out"
            },
            circle: {
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
                backgroundSize: "300% 300%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "16px",
                animation: "gradientShift 3s ease infinite"
            },
            number: {
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
                fontFamily: "system-ui, sans-serif"
            },
            text: {
                fontSize: "24px",
                fontWeight: "600",
                color: "#2c3e50",
                fontFamily: "system-ui, sans-serif",
                margin: "0"
            }
        }}
        html={`<div id="container">
    <div id="circle">
        <span id="number">${number}</span>
    </div>
    <h2 id="text">${text}</h2>
</div>`}
    />
}

const SimpleTerminal = ({ width = "100%" }) => {
    const distUrl = `./assets/readme-svg/terminal/simple-terminal.svg`;

    return <UI.Svg
        distUrl={distUrl}
        width={width}
        viewBox="0 0 800 50"
        keyframes={[
            {
                name: "typing",
                frames: [
                    { percent: "0%", style: { width: "0ch" } },
                    { percent: "100%", style: { width: "28ch" } }
                ]
            },
            {
                name: "blink",
                frames: [
                    { percent: "0%", style: { opacity: "1" } },
                    { percent: "50%", style: { opacity: "0" } },
                    { percent: "100%", style: { opacity: "1" } }
                ]
            }
        ]}
        style={{
            terminal: {
                backgroundColor: "#0d1117",
                border: "1px solid #30363d",
                borderRadius: "6px",
                padding: "16px",
                fontFamily: "'SF Mono', Monaco, 'Cascadia Code', monospace",
                fontSize: "14px",
                maxWidth: "500px",
            },
            line: {
                color: "#e6edf3",
            },
            prompt: {
                color: "#7c3aed",
                fontWeight: "bold"
            },
            command: {
                color: "#e6edf3",
                whiteSpace: "nowrap",
                overflow: "hidden",
                display: "inline-block",
                width: "0ch",
                animation: "typing 2.5s steps(28) 0.5s forwards"
            },
            cursor: {
                color: "#7c3aed",
                animation: "blink 1s infinite",
                marginLeft: "1px"
            }
        }}
        html={`<div id="terminal">
    <div id="line">
        <span id="prompt">$ </span>
        <span id="command">npx readme.jsx ./README.jsx</span>
        <span id="cursor">▎</span>
    </div>
</div>`}
    />
}

export default <>
    <UI.Center>
        <Logo />
    </UI.Center>

    <UI.Br />
    <UI.Br />

    <UI.Alert type="NOTE" text="This markdown has been generated using readme.jsx" />

    <UI.Br />

    <NumberedHeading text="What is README.jsx?" number={1} />

    README.jsx is a JSX-to-Markdown compiler. Instead of wrestling with raw Markdown syntax, you can use familiar JSX components to generate your documentation


    <UI.Br />

    <NumberedHeading text="Usage" number={3} />

    <SimpleTerminal />
    <UI.Br />

    <NumberedHeading text="Quick Start" number={4} />

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

    <UI.Code code="npx readme.jsx ./README.jsx" lang="bash" />

    <UI.Br />

    <NumberedHeading text="Available UI" number={5} />

    <UI.Table rows={[
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
                content: <UI.Code lang="jsx" inline code="<UI.Bold text='Hello' />" />,
                type: "td",
            },
            {
                content: <UI.Bold text='Hello' />,
                type: "td",
            },
        ],
        [
            {
                content: "Italic",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Italic text='Hello' />" />,
                type: "td",
            },
            {
                content: <UI.Italic text='Hello' />,
                type: "td",
            },
        ],
        [
            {
                content: "Strikethrough",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.StrikeThrough text='Hello' />" />,
                type: "td",
            },
            {
                content: <UI.StrikeThrough text='Hello' />,
                type: "td",
            },
        ],
        [
            {
                content: "Inline Code",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Code inline code='console.log()' />" />,
                type: "td",
            },
            {
                content: <UI.Code inline code='console.log()' />,
                type: "td",
            },
        ],
        [
            {
                content: "Code Block",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Code lang='js' code='const x = 1;' />" />,
                type: "td",
            },
            {
                content: <UI.Code lang='js' code='const x = 1;' />,
                type: "td",
            },
        ],
        [
            {
                content: "Link",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Code inline code='console.log()' />" />,
                type: "td",
            },
            {
                content: <UI.Link link='#hello' description='Click me' />,
                type: "td",
            },
        ],
        [
            {
                content: "Heading",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Heading text='Title' order={2} />" />,
                type: "td",
            },
            {
                content: <UI.Heading text='Title' order={2} />,
                type: "td",
            },
        ],
        [
            {
                content: "List",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.List list={['Item 1', 'Item 2']} />" />,
                type: "td",
            },
            {
                content: <UI.List list={['Item 1', 'Item 2']} />,
                type: "td",
            },
        ],
        [
            {
                content: "Ordered List",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.List list={['First', 'Second']} ordered />" />,
                type: "td",
            },
            {
                content: <>
                    <UI.Br />
                    <UI.Br />
                    <UI.List ordered list={['First', 'Second']} />
                </>,
                type: "td",
            },
        ],
        [
            {
                content: "Image",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Image src='logo.png' width='100px' />" />,
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
                content: <UI.Code lang="jsx" inline code="<UI.Alert type='NOTE' text='Important info' />" />,
                type: "td",
            },
            {
                content: <UI.Alert type='NOTE' text='Important info' />,
                type: "td",
            },
        ],
        [
            {
                content: "Alert Warning",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Alert type='WARNING' text='Be careful!' />" />,
                type: "td",
            },
            {
                content: <UI.Alert type='WARNING' text='Be careful!' />,
                type: "td",
            },
        ],
        [
            {
                content: "Alert Tip",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Alert type='TIP' text='Pro tip here' />" />,
                type: "td",
            },
            {
                content: <UI.Alert type='TIP' text='Pro tip here' />,
                type: "td",
            },
        ],
        [
            {
                content: "Tasks",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Tasks list={[{content: 'Done', done: true}]} />" />,
                type: "td",
            },
            {
                content: <UI.Tasks list={[{ content: 'Done', done: true }, { content: 'Todo', done: false }]} />,
                type: "td",
            },
        ],
        [
            {
                content: "Keyboard Key",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Kbd text='Ctrl+C' />" />,
                type: "td",
            },
            {
                content: <UI.Kbd text='Ctrl+C' />,
                type: "td",
            },
        ],
        [
            {
                content: "Subscript",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Sub text='2' />" />,
                type: "td",
            },
            {
                content: <UI.Sub text='2' />,
                type: "td",
            },
        ],
        [
            {
                content: "Horizontal Rule",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Hr />" />,
                type: "td",
            },
            {
                content: <UI.Hr />,
                type: "td",
            },
        ],
        [
            {
                content: "Line Break",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Br />" />,
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
                content: <UI.Code lang="jsx" inline code="<UI.Center>Content</UI.Center>" />,
                type: "td",
            },
            {
                content: <UI.Center>Centered Text</UI.Center>,
                type: "td",
            },
        ],
        [
            {
                content: "Boxed Content",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Boxed>Content</UI.Boxed>" />,
                type: "td",
            },
            {
                content: <UI.Boxed>Boxed Text</UI.Boxed>,
                type: "td",
            },
        ],
        [
            {
                content: "Badge",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code={`<UI.Badge leftText="The badge" rightText="Suffix" leftColor="yellow" rightColor="red" />`} />,
                type: "td",
            },
            {
                content: <UI.Badge leftText="The badge" rightText="Suffix" leftColor="yellow" rightColor="red" />,
                type: "td",
            },
        ],
    ]} />


    <UI.Br />

    <NumberedHeading text="Advanced Example: Animated SVG" number={6} />


    <UI.Code code={`<UI.Svg
    distUrl="./logo.svg"
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

    <NumberedHeading text="Configuration" number={7} />

    Add these scripts to your <UI.Code code="package.json" inline />:

    <UI.Code code={`{
  "scripts": {
    "readme": "npx readme.jsx README.jsx",
    "readme:watch": "npx readme.jsx README.jsx --watch"
  }
}`} lang="json" />

    <UI.Br />

    <NumberedHeading text="Benefits" number={8} />
    <UI.Br />
    <UI.List list={[
        "🔧 **IDE Support** - Full IntelliSense and autocomplete",
        "♻️ **Reusability** - Create custom components and templates",
        "🎨 **Rich Styling** - Advanced layouts and animations",
        "📱 **Responsive** - Built-in responsive design patterns",
        "⚡ **Fast** - Efficient compilation to standard Markdown",
    ]} />

    <UI.Br />

    <NumberedHeading text="Contributing" number={9} />

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
    <UI.Br />

    <NumberedHeading text="License" number={10} />

    This project is licensed under the MIT License - see the LICENSE file for details.

    <UI.Br />

    <UI.Hr />

    <UI.Center>
        <UI.Bold text="Made with ❤️ by the README.jsx team" />
        <UI.Br />
        <UI.Link link="https://github.com/readme-jsx/readme.jsx" description="⭐ Star us on GitHub" />
    </UI.Center>
</>