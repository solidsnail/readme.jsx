<p align="center"><img src="./assets/readme-svg/logo.svg" /></p>
<p align="center"><img src="https://img.shields.io/badge/version-0.6.8-facc15?style=for-the-badge&labelColor=0f172a&color=facc15" alt="version" /><img src="https://img.shields.io/badge/license-MIT-0ea5e9?style=for-the-badge&labelColor=0f172a&color=0ea5e9" alt="license" /></p>
<p align="center"><a href="https://www.paypal.com/paypalme/X3MWorks"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" width="130" /></a></p>

---

## ✨ What is README.jsx?

<table ><tr ><td >**README.jsx** is a modern JSX-to-Markdown transpiler. It allows you to leverage the power of **JSX components** to build beautiful, consistent, and maintainable documentation without ever touching raw Markdown.</td></tr></table>

### 🚀 Why use it?

- � **Lightning Fast** - Write documentation at the speed of thought.
- 🛠️ **Component-Based** - Build reusable UI patterns for your READMEs.
- ✅ **Type-Safe** - Full IntelliSense support for your documentation elements.
- 🎨 **Rich Visuals** - Easily embed animated SVGs and styled badges.

---

---

## 🛠️ Creating Custom Components

Creating your own components is easy! Just define a function that returns a string or other UI elements:

```jsx
const MyBadge = ({ text }) => (
  <UI.Badge leftText="Status" rightText={text} rightColor="green" />
);

export default (
  <UI.Center>
    <MyBadge text="Online" />
  </UI.Center>
);
```

---

## Usage

<img src="./assets/readme-svg/terminal-usage.svg" width="100%" />

## Quick Start

Create a `README.jsx` file:

```jsx
import { UI } from "readme.jsx";

export default (
  <>
    <UI.Heading text="My Awesome Project" />

    <UI.Alert type="TIP" text="This README was written in JSX!" />

    <UI.List list={["Easy to write", "Type-safe", "Maintainable"]} />

    <UI.Code code={`console.log("Hello, README.jsx!")`} lang="javascript" />
  </>
);
```

Transpile to Markdown:

```bash
npx readme.jsx ./README.jsx
```

## 🧱 Available UI Components

Explore the built-in components you can use to build your documentation.

<table ><tr ><th >

Name

</th><th >

Code

</th><th >

Preview

</th></tr><tr ><td >

Bold

</td><td >

`<UI.Bold text='Hello' />`

</td><td >

**Hello**

</td></tr><tr ><td >

Italic

</td><td >

`<UI.Italic text='Hello' />`

</td><td >

_Hello_

</td></tr><tr ><td >

Strikethrough

</td><td >

`<UI.StrikeThrough text='Hello' />`

</td><td >

~~Hello~~

</td></tr><tr ><td >

Inline Code

</td><td >

`<UI.Code inline code='console.log()' />`

</td><td >

`console.log()`

</td></tr><tr ><td >

Code Block

</td><td >

`<UI.Code lang='js' code='const x = 1;' />`

</td><td >

```js
const x = 1;
```

</td></tr><tr ><td >

Link

</td><td >

`<UI.Code inline code='console.log()' />`

</td><td >

[Click me](#hello)

</td></tr><tr ><td >

Heading

</td><td >

`<UI.Heading text='Title' order={2} />`

</td><td >

## Title

</td></tr><tr ><td >

List

</td><td >

`<UI.List list={['Item 1', 'Item 2']} />`

</td><td >

- Item 1
- Item 2

</td></tr><tr ><td >

Ordered List

</td><td >

`<UI.List list={['First', 'Second']} ordered />`

</td><td >

1. First
2. Second

</td></tr><tr ><td >

Image

</td><td >

`<UI.Image src='logo.png' width='100px' />`

</td><td >

![](logo.png)

</td></tr><tr ><td >

Alert Note

</td><td >

`<UI.Alert type='NOTE' text='Note info' />`

</td><td >

> [!NOTE]
> Note info

</td></tr><tr ><td >

Alert Important

</td><td >

`<UI.Alert type='IMPORTANT' text='Important info' />`

</td><td >

> [!IMPORTANT]
> Important info

</td></tr><tr ><td >

Alert Caution

</td><td >

`<UI.Alert type='CAUTION' text='Cautious note' />`

</td><td >

> [!CAUTION]
> Important info

</td></tr><tr ><td >

Alert Warning

</td><td >

`<UI.Alert type='WARNING' text='Be careful!' />`

</td><td >

> [!WARNING]
> Be careful!

</td></tr><tr ><td >

Alert Tip

</td><td >

`<UI.Alert type='TIP' text='Pro tip here' />`

</td><td >

> [!TIP]
> Pro tip here

</td></tr><tr ><td >

Tasks

</td><td >

`<UI.Tasks list={[{content: 'Done', done: true}]} />`

</td><td >

- [x] Done
- [ ] Todo

</td></tr><tr ><td >

Keyboard Key

</td><td >

`<UI.Kbd text='Ctrl+C' />`

</td><td >

<kbd >Ctrl+C</kbd>

</td></tr><tr ><td >

Subscript

</td><td >

`<UI.Sub text='2' />`

</td><td >

<sub >2</sub>

</td></tr><tr ><td >

Supscript

</td><td >

`<UI.Sup text='2' />`

</td><td >

</td></tr><tr ><td >

Emoji

</td><td >

`<UI.Emoji emjoji=':smile:' />`

</td><td >

:smile:

</td></tr><tr ><td >

Horizontal Rule

</td><td >

`<UI.Hr />`

</td><td >

---

</td></tr><tr ><td >

Line Break

</td><td >

`<UI.Br />`

</td><td >

↵ (new line)

</td></tr><tr ><td >

Center Align

</td><td >

`<UI.Center>Content</UI.Center>`

</td><td >

<p align="center">Centered Text</p>

</td></tr><tr ><td >

Boxed Content

</td><td >

`<UI.Boxed>Content</UI.Boxed>`

</td><td >

<table ><tr ><td >Boxed Text</td></tr></table>

</td></tr><tr ><td >

Badge

</td><td >

`<UI.Badge leftText="The badge" rightText="Suffix" leftColor="white" rightColor="red" />`

</td><td >

<img src="https://img.shields.io/badge/The%20badge-Suffix-red?style=for-the-badge&labelColor=white&color=red" alt="The badge" />

</td></tr><tr ><td >

Terminal

</td><td >

`<UI.Terminal code="npx example" />`

</td><td >

<img src="./assets/readme-svg/terminal.svg" width="100%" />

</td></tr><tr ><td >

Paypal

</td><td >

`<UI.Paypal id="YOUR_ID" />`

</td><td >

<a href="https://www.paypal.com/paypalme/X3MWorks"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" width="130" /></a>

</td></tr><tr ><td >

Accordion

</td><td >

`<UI.Accordion title="Title">
                    <UI.Bold text="Content" />
                </UI.Accordion>`

</td><td >

<details ><summary >Title</summary>**Content**</details>

</td></tr><tr ><td >

Tag

</td><td >

`<UI.Tag type="wordpress" />`

</td><td >

<img src="https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white" />

</td></tr></table>

## 💎 Advanced Showcase

Documentation doesn't have to be boring. Use advanced `UI.Svg` features to create interactive-feeling elements.

### Animated Feature Card

```jsx
<UI.Svg
  distUrl="./assets/feature-card.svg"
  viewBox="0 0 800 240"
  keyframes={[
    {
      name: "pulse",
      frames: [
        { percent: "0%", style: { transform: "scale(1)", opacity: "0.5" } },
        { percent: "50%", style: { transform: "scale(1.05)", opacity: "0.8" } },
        { percent: "100%", style: { transform: "scale(1)", opacity: "0.5" } },
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
      width: "80px",
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
```

<img src="./assets/feature-card.svg" />

---

### Import package.json values

```jsx
import packageJson from "./package.json" with { type: "json" };

<UI.Badge leftText="version" rightText={packageJson.version} />;
```

## Configuration

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "readme": "npx readme.jsx README.jsx",
    "readme:watch": "npx readme.jsx README.jsx --watch"
  }
}
```

## Benefits

- 🔧 **IDE Support** - Full IntelliSense and autocomplete
- ♻️ **Reusability** - Create custom components and templates
- 🎨 **Rich Styling** - Advanced layouts and animations
- 📱 **Responsive** - Built-in responsive design patterns
- ⚡ **Fast** - Efficient compilation to standard Markdown

## Contributing

We welcome contributions! Here's how you can help:

- [x] 🍴 Fork the repository
- [x] 🌿 Create a feature branch
- [ ] 💡 Add your amazing feature
- [ ] ✅ Write tests
- [ ] 📝 Update documentation
- [ ] 🚀 Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
