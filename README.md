<p align="center"><img src="./assets/readme-svg/logo.svg" /></p>

<p align="center"><img src="https://img.shields.io/badge/version-0.6.5-3b82f6?style=flat-square&labelColor=black&color=3b82f6" alt="version" /></p>

<p align="center"><a href="https://www.paypal.com/paypalme/X3MWorks"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" width="130" /></a></p>
<img src="./assets/readme-svg/number-headings/twdiiu.svg" width="100%" />

**README.jsx** is a JSX-to-Markdown compiler. Instead of wrestling with raw Markdown syntax, you can use familiar **JSX components** to generate your documentation.

This makes documentations:

- 💨 Faster to write
- ⭕ Consistent across projects
- 👶 Easier to maintain

<img src="./assets/readme-svg/number-headings/p13lye.svg" width="100%" /><img src="./assets/readme-svg/terminal-usage.svg" width="100%" />
<img src="./assets/readme-svg/number-headings/u66d5h.svg" width="100%" />Create a `README.jsx` file:

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

Compile to Markdown:

```bash
npx readme.jsx ./README.jsx
```

<img src="./assets/readme-svg/number-headings/jihxle.svg" width="100%" /><table ><tr ><th >

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

`<UI.Emoji emjoji=':arrow_backward:' />`

</td><td >

:arrow_backward:

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

`<UI.Badge leftText="The badge" rightText="Suffix" leftColor="#3b82f6" rightColor="red" />`

</td><td >

<img src="https://img.shields.io/badge/The%20badge-Suffix-red?style=for-the-badge&labelColor=%233b82f6&color=red" alt="The badge" />

</td></tr><tr ><td >

Terminal

</td><td >

`<UI.Terminal code="npx example" />`

</td><td >

<img src="./assets/readme-svg/terminal.svg" width="100%" />

</td></tr><tr ><td >

Number Heading

</td><td >

`<UI.NumberHeading text="Usage" number={2} />`

</td><td >

<img src="./assets/readme-svg/number-headings/p13lye.svg" width="100%" />

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
<img src="./assets/readme-svg/number-headings/nb4kmu.svg" width="100%" />

### Animated SVG

```jsx
<UI.Svg
  distUrl="./assets/myanimated-title.svg"
  viewBox="0 0 800 100"
  keyframes={[
    {
      name: "fadeIn",
      frames: [
        { percent: "0%", style: { opacity: "0" } },
        { percent: "100%", style: { opacity: "1" } },
      ],
    },
  ]}
  style={{
    title: {
      fontSize: "30px",
      fontWeight: "bold",
      fontFamily: "monospace",
      animation: "fadeIn 1s ease-in-out infinite",
    },
  }}
  html={`<h1 id="title">Animated Title</h1>`}
/>
```

<img src="./assets/myanimated-title.svg" />

---

### Import package.json values

```jsx
import packageJson from "./package.json" with { type: "json" };

<UI.Badge leftText="version" rightText={packageJson.version} />;
```

<img src="./assets/readme-svg/number-headings/fqqgov.svg" width="100%" />Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "readme": "npx readme.jsx README.jsx",
    "readme:watch": "npx readme.jsx README.jsx --watch"
  }
}
```

<img src="./assets/readme-svg/number-headings/mbe0sa.svg" width="100%" />

- 🔧 **IDE Support** - Full IntelliSense and autocomplete
- ♻️ **Reusability** - Create custom components and templates
- 🎨 **Rich Styling** - Advanced layouts and animations
- 📱 **Responsive** - Built-in responsive design patterns
- ⚡ **Fast** - Efficient compilation to standard Markdown

<img src="./assets/readme-svg/number-headings/pjjirv.svg" width="100%" />We welcome contributions! Here's how you can help:

- [x] 🍴 Fork the repository
- [x] 🌿 Create a feature branch
- [ ] 💡 Add your amazing feature
- [ ] ✅ Write tests
- [ ] 📝 Update documentation
- [ ] 🚀 Submit a pull request

<img src="./assets/readme-svg/number-headings/fq4t4j.svg" width="100%" />This project is licensed under the MIT License - see the LICENSE file for details.
