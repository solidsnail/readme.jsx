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




export default <>
    <UI.Center>
        <Logo />
    </UI.Center>

    <UI.Br />
    <UI.Br />

    <UI.Alert type="NOTE" text="This markdown has been generated using readme.jsx" />

    <UI.Br />

    <UI.NumberHeading text="What is README.jsx?" number={1} />

    README.jsx is a JSX-to-Markdown compiler. Instead of wrestling with raw Markdown syntax, you can use familiar JSX components to generate your documentation


    <UI.Br />

    <UI.NumberHeading text="Usage" number={3} />

    <UI.Terminal code="npx readme.jsx ./README.jsx" distUrl="./assets/readme-svg/terminal-usage.svg" />
    <UI.Br />

    <UI.NumberHeading text="Quick Start" number={4} />

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

    <UI.NumberHeading text="Available UI" number={5} />

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
                content: <UI.Code lang="jsx" inline code="<UI.Alert type='NOTE' text='Note info' />" />,
                type: "td",
            },
            {
                content: <UI.Alert type='NOTE' text='Note info' />,
                type: "td",
            },
        ],
        [
            {
                content: "Alert Important",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Alert type='IMPORTANT' text='Important info' />" />,
                type: "td",
            },
            {
                content: <UI.Alert type='IMPORTANT' text='Important info' />,
                type: "td",
            },
        ],
        [
            {
                content: "Alert Caution",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code="<UI.Alert type='CAUTION' text='Cautious note' />" />,
                type: "td",
            },
            {
                content: <UI.Alert type='CAUTION' text='Important info' />,
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
        [
            {
                content: "Terminal",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code={`<UI.Terminal code="npx example" />`} />,
                type: "td",
            },
            {
                content: <UI.Terminal code="npx example" />,
                type: "td",
            },
        ],
        [
            {
                content: "Number Heading",
                type: "td",
            },
            {
                content: <UI.Code lang="jsx" inline code={`<UI.NumberHeading text="Usage" number={2} />`} />,
                type: "td",
            },
            {
                content: <UI.NumberHeading text="Usage" number={2} />,
                type: "td",
            },
        ],
    ]} />


    <UI.Br />

    <UI.NumberHeading text="Advanced Example: Animated SVG" number={6} />


    <UI.Code code={`<UI.Svg
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
/>`} lang="jsx" />

    <UI.Br />

    <UI.Svg
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
        html={`<h1 id="title">Animated Title</h1>`}
    />

    <UI.Br />

    <UI.NumberHeading text="Configuration" number={7} />

    Add these scripts to your <UI.Code code="package.json" inline />:

    <UI.Code code={`{
  "scripts": {
    "readme": "npx readme.jsx README.jsx",
    "readme:watch": "npx readme.jsx README.jsx --watch"
  }
}`} lang="json" />

    <UI.Br />

    <UI.NumberHeading text="Benefits" number={8} />
    <UI.Br />
    <UI.List list={[
        "🔧 **IDE Support** - Full IntelliSense and autocomplete",
        "♻️ **Reusability** - Create custom components and templates",
        "🎨 **Rich Styling** - Advanced layouts and animations",
        "📱 **Responsive** - Built-in responsive design patterns",
        "⚡ **Fast** - Efficient compilation to standard Markdown",
    ]} />

    <UI.Br />

    <UI.NumberHeading text="Contributing" number={9} />

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

    <UI.NumberHeading text="License" number={10} />

    This project is licensed under the MIT License - see the LICENSE file for details.

    <UI.Br />

</>