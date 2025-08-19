<p align="center"><img src="./assets/readme-svg/logo.svg" width="300px" /></p>

> [!TIP]
> Write your README files using JSX syntax and compile them to beautiful Markdown!

<img src="./assets/headings/numbered-heading-1.svg" width="100%" />README.jsx is a JSX-to-Markdown compiler. Instead of wrestling with raw Markdown syntax, you can use familiar JSX components to generate your documentation
<img src="./assets/headings/numbered-heading-2.svg" width="100%" />

- 📝 Write README files using JSX syntax
- 🎨 Rich UI components for better documentation
- 🔧 TypeScript support out of the box
- 📱 Responsive layouts with built-in components
- 🎭 Animated SVG generation capabilities
- 📊 Tables, lists, and interactive elements
- 🎯 Type-safe component props
- ⚡ Fast compilation to standard Markdown

<img src="./assets/headings/numbered-heading-3.svg" width="100%" />

```bash
npx readme.jsx ./README.jsx
```

<img src="./assets/headings/numbered-heading-4.svg" width="100%" />Create a `README.jsx` file:

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

<img src="./assets/headings/numbered-heading-5.svg" width="100%" /><details ><summary >Text Formatting</summary>

- **Bold** - **Bold text**
- _Italic_ - _Italic text_
- ~~Strikethrough~~ - ~~Strikethrough text~~
- `inline code` - Inline code
</details><details ><summary >Layout Components</summary>
- <UI.Center> - Center align content
- <UI.Boxed> - Put content in a table box
- <UI.Br /> - Line break
- <UI.Hr /> - Horizontal rule
</details><details ><summary >Content Components</summary>
- <UI.Heading> - Create headings (h1-h6)
- <UI.List> - Ordered and unordered lists
- <UI.Image> - Images with width support
- <UI.Link> - Clickable links
- <UI.Table> - Rich tables with custom widths
- <UI.Tasks> - GitHub-style task lists
</details><details ><summary >Interactive Components</summary>
- <UI.Accordion> - Collapsible sections
- <UI.Alert> - GitHub-style alerts (NOTE, TIP, WARNING, etc.)
- <UI.Kbd> - Keyboard key styling
- <UI.Emoji> - Emoji support
</details><details ><summary >Advanced Components</summary>
- <UI.Svg> - Generate animated SVGs with CSS keyframes
- <UI.Code> - Syntax-highlighted code blocks
- <UI.Sub> - Subscript text
- <UI.Sup> - Superscript text
</details>
<img src="./assets/headings/numbered-heading-6.svg" width="100%" />Create stunning animated graphics directly in your README:

```jsx
<UI.Svg
  url="./logo.svg"
  width="300px"
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
      fontSize: "48px",
      fontWeight: "bold",
      animation: "fadeIn 2s ease-in-out",
    },
  }}
  html={`<h1 id="title">Animated Title</h1>`}
/>
```

<img src="./assets/headings/numbered-heading-7.svg" width="100%" /><table ><tr ><th width="30%">**Component**</th><th width="50%">**Description**</th><th width="20%">**Example**</th></tr><tr ><td >`<UI.Alert>`</td><td >GitHub-style callout boxes</td><td >> [!NOTE]

> Like this!</td></tr><tr ><td >`<UI.Tasks>`</td><td >Interactive task lists</td><td >- [x] Done

- [ ] Todo</td></tr><tr ><td >`<UI.Kbd>`</td><td >Keyboard key styling</td><td >Press Ctrl+C</td></tr></table>
      <img src="./assets/headings/numbered-heading-8.svg" width="100%" />Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "readme": "npx readme.jsx README.jsx",
    "readme:watch": "npx readme.jsx README.jsx --watch"
  }
}
```

<img src="./assets/headings/numbered-heading-9.svg" width="100%" /><table ><tr ><td ><p align="center">**Traditional Markdown**

````markdown
# My Project

> **Note**
> This is a note

- Item 1
- Item 2

```javascript
console.log("Hello");
```
````

````

</p></td></tr></table><p align="center">**VS**</p><table ><tr ><td ><p align="center">**README.jsx**


```jsx
<UI.Heading text="My Project" />

<UI.Alert type="NOTE" text="This is a note" />

<UI.List list={["Item 1", "Item 2"]} />

<UI.Code code='console.log("Hello");' lang="javascript" />
````

</p></td></tr></table>
<img src="./assets/headings/numbered-heading-10.svg" width="100%" />

- 🔍 **Type Safety** - Catch errors at compile time
- 🔧 **IDE Support** - Full IntelliSense and autocomplete
- ♻️ **Reusability** - Create custom components and templates
- 🎨 **Rich Styling** - Advanced layouts and animations
- 📱 **Responsive** - Built-in responsive design patterns
- ⚡ **Fast** - Efficient compilation to standard Markdown
- 🧪 **Testable** - Unit test your documentation components

<img src="./assets/headings/numbered-heading-11.svg" width="100%" />We welcome contributions! Here's how you can help:

- [x] 🍴 Fork the repository
- [x] 🌿 Create a feature branch
- [ ] 💡 Add your amazing feature
- [ ] ✅ Write tests
- [ ] 📝 Update documentation
- [ ] 🚀 Submit a pull request
      <img src="./assets/headings/numbered-heading-12.svg" width="100%" />This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">**Made with ❤️ by the README.jsx team**
[⭐ Star us on GitHub](https://github.com/readme-jsx/readme.jsx)</p>
