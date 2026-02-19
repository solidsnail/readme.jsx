import { UI } from "readme.jsx/ui";
import packageJson from "./package.json" with { type: "json" };

const color = "white";

const Logo = () => {
  const distUrl = "./assets/readme-svg/logo.svg";
  return (
    <UI.Svg
      distUrl={distUrl}
      viewBox="0 0 800 200"
      keyframes={[
        {
          name: "shimmer",
          frames: [
            { percent: "0%", style: { transform: "translateX(-100%)" } },
            { percent: "100%", style: { transform: "translateX(100%)" } },
          ],
        },
        {
          name: "float",
          frames: [
            { percent: "0%", style: { transform: "translateY(0px)" } },
            { percent: "50%", style: { transform: "translateY(-10px)" } },
            { percent: "100%", style: { transform: "translateY(0px)" } },
          ],
        },
      ]}
      style={{
        container: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 180,
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          borderRadius: "16px",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          overflow: "hidden",
          position: "relative",
        },
        titleWrapper: {
          display: "flex",
          alignItems: "center",
          gap: "10px",
          zIndex: 2,
        },
        title: {
          fontSize: "72px",
          fontWeight: "900",
          letterSpacing: "-2px",
          margin: 0,
        },
        jsxBadge: {
          background: "#facc15",
          color: "#0f172a",
          padding: "4px 12px",
          borderRadius: "8px",
          fontSize: "32px",
          fontWeight: "bold",
          textTransform: "uppercase",
        },
        subtitle: {
          fontSize: "18px",
          opacity: 0.8,
          marginTop: "8px",
          zIndex: 2,
        },
        shimmer: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          animation: "shimmer 3s infinite linear",
          zIndex: 1,
        },
      }}
      html={`<div id="container">
    <div id="shimmer"></div>
    <div id="titleWrapper">
      <h1 id="title">README<span style="color: #facc15">.</span></h1>
      <span id="jsxBadge">jsx</span>
    </div>
    <p id="subtitle">The JSX-to-Markdown Transpiler</p>
</div>`}
    />
  );
};
export default (
  <>
    <UI.Center>
      <Logo />
    </UI.Center>
    <UI.Br />
    <UI.Center>
      <UI.Badge
        variant="for-the-badge"
        rightColor="facc15"
        leftText="version"
        rightText={packageJson.version}
        leftColor="0f172a"
      />
      <UI.Badge
        variant="for-the-badge"
        rightColor="0ea5e9"
        leftText="license"
        rightText="MIT"
        leftColor="0f172a"
      />
    </UI.Center>
    <UI.Br />
    <UI.Center>
      <UI.Paypal id="X3MWorks" />
    </UI.Center>
    <UI.Br />
    <UI.Hr />
    <UI.Heading text="✨ What is README.jsx?" order={2} />
    <UI.Boxed>
      <UI.Bold text="README.jsx" /> is a modern JSX-to-Markdown transpiler. It
      allows you to leverage the power of <UI.Bold text="JSX components" /> to
      build beautiful, consistent, and maintainable documentation without ever
      touching raw Markdown.
    </UI.Boxed>
    <UI.Br />
    <UI.Heading text="🚀 Why use it?" order={3} />
    <UI.List
      list={[
        "� **Lightning Fast** - Write documentation at the speed of thought.",
        "🛠️ **Component-Based** - Build reusable UI patterns for your READMEs.",
        "✅ **Type-Safe** - Full IntelliSense support for your documentation elements.",
        "🎨 **Rich Visuals** - Easily embed animated SVGs and styled badges.",
      ]}
    />
    <UI.Br />
    <UI.Hr />
    <UI.Br />
    <UI.Hr />
    <UI.Heading text="🛠️ Creating Custom Components" order={2} />
    Creating your own components is easy! Just define a function that returns a
    string or other UI elements:
    <UI.Code
      code={`const MyBadge = ({ text }) => (
  <UI.Badge 
    leftText="Status" 
    rightText={text} 
    rightColor="green" 
  />
);

export default (
  <UI.Center>
    <MyBadge text="Online" />
  </UI.Center>
);`}
      lang="jsx"
    />
    <UI.Br />
    <UI.Hr />
    <UI.Heading text="Usage" order={2} />
    <UI.Terminal
      code="npx readme.jsx ./README.jsx"
      distUrl="./assets/readme-svg/terminal-usage.svg"
    />
    <UI.Br />
    <UI.Heading text="Quick Start" order={2} />
    Create a <UI.Code code="README.jsx" inline /> file:
    <UI.Code
      code={`import { UI } from "readme.jsx"

export default <>
    <UI.Heading text="My Awesome Project" />

    <UI.Alert type="TIP" text="This README was written in JSX!" />

    <UI.List list={[
        "Easy to write",
        "Type-safe",
        "Maintainable"
    ]} />

    <UI.Code code={\`console.log("Hello, README.jsx!")\`} lang="javascript" />
</>`}
      lang="jsx"
    />
    Transpile to Markdown:
    <UI.Code code="npx readme.jsx ./README.jsx" lang="bash" />
    <UI.Br />
    <UI.Heading text="🧱 Available UI Components" order={2} />
    Explore the built-in components you can use to build your documentation.
    <UI.Br />
    <UI.Table
      rows={[
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
            content: (
              <UI.Code lang="jsx" inline code="<UI.Bold text='Hello' />" />
            ),
            type: "td",
          },
          {
            content: <UI.Bold text="Hello" />,
            type: "td",
          },
        ],
        [
          {
            content: "Italic",
            type: "td",
          },
          {
            content: (
              <UI.Code lang="jsx" inline code="<UI.Italic text='Hello' />" />
            ),
            type: "td",
          },
          {
            content: <UI.Italic text="Hello" />,
            type: "td",
          },
        ],
        [
          {
            content: "Strikethrough",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.StrikeThrough text='Hello' />"
              />
            ),
            type: "td",
          },
          {
            content: <UI.StrikeThrough text="Hello" />,
            type: "td",
          },
        ],
        [
          {
            content: "Inline Code",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Code inline code='console.log()' />"
              />
            ),
            type: "td",
          },
          {
            content: <UI.Code inline code="console.log()" />,
            type: "td",
          },
        ],
        [
          {
            content: "Code Block",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Code lang='js' code='const x = 1;' />"
              />
            ),
            type: "td",
          },
          {
            content: <UI.Code lang="js" code="const x = 1;" />,
            type: "td",
          },
        ],
        [
          {
            content: "Link",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Code inline code='console.log()' />"
              />
            ),
            type: "td",
          },
          {
            content: <UI.Link link="#hello" description="Click me" />,
            type: "td",
          },
        ],
        [
          {
            content: "Heading",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Heading text='Title' order={2} />"
              />
            ),
            type: "td",
          },
          {
            content: <UI.Heading text="Title" order={2} />,
            type: "td",
          },
        ],
        [
          {
            content: "List",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.List list={['Item 1', 'Item 2']} />"
              />
            ),
            type: "td",
          },
          {
            content: <UI.List list={["Item 1", "Item 2"]} />,
            type: "td",
          },
        ],
        [
          {
            content: "Ordered List",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.List list={['First', 'Second']} ordered />"
              />
            ),
            type: "td",
          },
          {
            content: (
              <>
                <UI.Br />
                <UI.Br />
                <UI.List ordered list={["First", "Second"]} />
              </>
            ),
            type: "td",
          },
        ],
        [
          {
            content: "Image",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Image src='logo.png' width='100px' />"
              />
            ),
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
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Alert type='NOTE' text='Note info' />"
              />
            ),
            type: "td",
          },
          {
            content: <UI.Alert type="NOTE" text="Note info" />,
            type: "td",
          },
        ],
        [
          {
            content: "Alert Important",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Alert type='IMPORTANT' text='Important info' />"
              />
            ),
            type: "td",
          },
          {
            content: <UI.Alert type="IMPORTANT" text="Important info" />,
            type: "td",
          },
        ],
        [
          {
            content: "Alert Caution",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Alert type='CAUTION' text='Cautious note' />"
              />
            ),
            type: "td",
          },
          {
            content: <UI.Alert type="CAUTION" text="Important info" />,
            type: "td",
          },
        ],
        [
          {
            content: "Alert Warning",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Alert type='WARNING' text='Be careful!' />"
              />
            ),
            type: "td",
          },
          {
            content: <UI.Alert type="WARNING" text="Be careful!" />,
            type: "td",
          },
        ],
        [
          {
            content: "Alert Tip",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Alert type='TIP' text='Pro tip here' />"
              />
            ),
            type: "td",
          },
          {
            content: <UI.Alert type="TIP" text="Pro tip here" />,
            type: "td",
          },
        ],
        [
          {
            content: "Tasks",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Tasks list={[{content: 'Done', done: true}]} />"
              />
            ),
            type: "td",
          },
          {
            content: (
              <UI.Tasks
                list={[
                  { content: "Done", done: true },
                  { content: "Todo", done: false },
                ]}
              />
            ),
            type: "td",
          },
        ],
        [
          {
            content: "Keyboard Key",
            type: "td",
          },
          {
            content: (
              <UI.Code lang="jsx" inline code="<UI.Kbd text='Ctrl+C' />" />
            ),
            type: "td",
          },
          {
            content: <UI.Kbd text="Ctrl+C" />,
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
            content: <UI.Sub text="2" />,
            type: "td",
          },
        ],
        [
          {
            content: "Supscript",
            type: "td",
          },
          {
            content: <UI.Code lang="jsx" inline code="<UI.Sup text='2' />" />,
            type: "td",
          },
          {
            content: <UI.Sup text="2" />,
            type: "td",
          },
        ],
        [
          {
            content: "Emoji",
            type: "td",
          },
          {
            content: (
              <UI.Code lang="jsx" inline code="<UI.Emoji emjoji=':smile:' />" />
            ),
            type: "td",
          },
          {
            content: <UI.Emoji emjoji=":smile:" />,
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
            content: (
              <UI.Code
                lang="jsx"
                inline
                code="<UI.Center>Content</UI.Center>"
              />
            ),
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
            content: (
              <UI.Code lang="jsx" inline code="<UI.Boxed>Content</UI.Boxed>" />
            ),
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
            content: (
              <UI.Code
                lang="jsx"
                inline
                code={`<UI.Badge leftText="The badge" rightText="Suffix" leftColor="${color}" rightColor="red" />`}
              />
            ),
            type: "td",
          },
          {
            content: (
              <UI.Badge
                leftText="The badge"
                rightText="Suffix"
                leftColor={color}
                rightColor="red"
              />
            ),
            type: "td",
          },
        ],
        [
          {
            content: "Terminal",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code={`<UI.Terminal code="npx example" />`}
              />
            ),
            type: "td",
          },
          {
            content: <UI.Terminal code="npx example" />,
            type: "td",
          },
        ],
        [
          {
            content: "Paypal",
            type: "td",
          },
          {
            content: (
              <UI.Code lang="jsx" inline code={`<UI.Paypal id="YOUR_ID" />`} />
            ),
            type: "td",
          },
          {
            content: <UI.Paypal id="X3MWorks" />,
            type: "td",
          },
        ],
        [
          {
            content: "Accordion",
            type: "td",
          },
          {
            content: (
              <UI.Code
                lang="jsx"
                inline
                code={`<UI.Accordion title="Title">
                    <UI.Bold text="Content" />
                </UI.Accordion>`}
              />
            ),
            type: "td",
          },
          {
            content: (
              <UI.Accordion title="Title">
                <UI.Bold text="Content" />
              </UI.Accordion>
            ),
            type: "td",
          },
        ],
        [
          {
            content: "Tag",
            type: "td",
          },
          {
            content: (
              <UI.Code lang="jsx" inline code={`<UI.Tag type="wordpress" />`} />
            ),
            type: "td",
          },
          {
            content: <UI.Tag type="wordpress" />,
            type: "td",
          },
        ],
      ]}
    />
    <UI.Br />
    <UI.Heading text="💎 Advanced Showcase" order={2} />
    Documentation doesn't have to be boring. Use advanced{" "}
    <UI.Code code="UI.Svg" inline /> features to create interactive-feeling
    elements.
    <UI.Br />
    <UI.Heading order={3} text="Animated Feature Card" />
    <UI.Br />
    <UI.Code
      code={`<UI.Svg
    distUrl="./assets/feature-card.svg"
    viewBox="0 0 800 240"
    keyframes={[
        {
            name: "pulse",
            frames: [
                { percent: "0%", style: { transform: "scale(1)", opacity: "0.5" } },
                { percent: "50%", style: { transform: "scale(1.05)", opacity: "0.8" } },
                { percent: "100%", style: { transform: "scale(1)", opacity: "0.5" } }
            ]
        }
    ]}
    style={{
        card: {
            background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            borderRadius: "20px",
            padding: "30px",
            color: "white",
            fontFamily: "system-ui",
            display: "flex",
            alignItems: "center",
            gap: "20px"
        },
        icon: {
            width: "80px",
            height: "80px",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            animation: "pulse 2s infinite ease-in-out"
        },
        content: { display: "flex", flexDirection: "column" },
        badge: {
            background: "#facc15",
            color: "#1e1b4b",
            padding: "4px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "bold",
            width: "fit-content",
            marginBottom: "8px"
        }
    }}
    html={\`
        <div id="card">
            <div id="icon">✨</div>
            <div id="content">
                <div id="badge">NEW FEATURE</div>
                <h2 style="margin: 0; font-size: 32px">Dynamic SVG Components</h2>
                <p style="margin: 8px 0 0; opacity: 0.9; font-size: 18px">
                    Inject raw HTML and CSS into your README with full 
                    animation support and responsive layouts.
                </p>
            </div>
        </div>
    \`}
/>`}
      lang="jsx"
    />
    <UI.Br />
    <UI.Svg
      distUrl="./assets/feature-card.svg"
      viewBox="0 0 800 240"
      keyframes={[
        {
          name: "pulse",
          frames: [
            { percent: "0%", style: { transform: "scale(1)", opacity: "0.5" } },
            {
              percent: "50%",
              style: { transform: "scale(1.05)", opacity: "0.8" },
            },
            {
              percent: "100%",
              style: { transform: "scale(1)", opacity: "0.5" },
            },
          ],
        },
      ]}
      style={{
        card: {
          background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
          borderRadius: "20px",
          padding: "30px",
          color: "white",
          fontFamily: "system-ui",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        },
        icon: {
          width: "100px",
          height: "80px",
          background: "rgba(255,255,255,0.2)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "40px",
          animation: "pulse 2s infinite ease-in-out",
        },
        content: { display: "flex", flexDirection: "column" },
        badge: {
          background: "#facc15",
          color: "#1e1b4b",
          padding: "4px 10px",
          borderRadius: "6px",
          fontSize: "12px",
          fontWeight: "bold",
          width: "fit-content",
          marginBottom: "8px",
        },
      }}
      html={`
        <div id="card">
            <div id="icon">✨</div>
            <div id="content">
                <div id="badge">NEW FEATURE</div>
                <h2 style="margin: 0; font-size: 32px">Dynamic SVG Components</h2>
                <p style="margin: 8px 0 0; opacity: 0.9; font-size: 18px">
                    Inject raw HTML and CSS into your README with full 
                    animation support and responsive layouts.
                </p>
            </div>
        </div>
    `}
    />
    <UI.Br />
    <UI.Hr />
    <UI.Heading order={3} text="Import package.json values" />
    <UI.Br />
    <UI.Code
      code={`import packageJson from "./package.json" with  { type: "json" };

 <UI.Badge leftText="version" rightText={packageJson.version} />`}
      lang="jsx"
    />
    <UI.Br />
    <UI.Heading text="Configuration" order={2} />
    Add these scripts to your <UI.Code code="package.json" inline />:
    <UI.Code
      code={`{
  "scripts": {
    "readme": "npx readme.jsx README.jsx",
    "readme:watch": "npx readme.jsx README.jsx --watch"
  }
}`}
      lang="json"
    />
    <UI.Br />
    <UI.Heading text="Benefits" order={2} />
    <UI.Br />
    <UI.List
      list={[
        "🔧 **IDE Support** - Full IntelliSense and autocomplete",
        "♻️ **Reusability** - Create custom components and templates",
        "🎨 **Rich Styling** - Advanced layouts and animations",
        "📱 **Responsive** - Built-in responsive design patterns",
        "⚡ **Fast** - Efficient compilation to standard Markdown",
      ]}
    />
    <UI.Br />
    <UI.Heading text="Contributing" order={2} />
    We welcome contributions! Here's how you can help:
    <UI.Tasks
      list={[
        { content: "🍴 Fork the repository", done: true },
        { content: "🌿 Create a feature branch", done: true },
        { content: "💡 Add your amazing feature", done: false },
        { content: "✅ Write tests", done: false },
        { content: "📝 Update documentation", done: false },
        { content: "🚀 Submit a pull request", done: false },
      ]}
    />
    <UI.Br />
    <UI.Br />
    <UI.Heading text="License" order={2} />
    This project is licensed under the MIT License - see the LICENSE file for
    details.
    <UI.Br />
  </>
);
