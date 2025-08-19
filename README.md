<p align="center"><img src="./assets/readme-svg/logo.svg" width="300px" /></p>

> [!TIP]
> Write your README files using JSX syntax and compile them to beautiful Markdown!

<img src="./assets/readme-svg/headings/numbered-heading-1.svg" width="100%" />README.jsx is a JSX-to-Markdown compiler. Instead of wrestling with raw Markdown syntax, you can use familiar JSX components to generate your documentation
<img src="./assets/readme-svg/headings/numbered-heading-3.svg" width="100%" /><img src="./assets/readme-svg/terminal/simple-terminal.svg" width="100%" />
<img src="./assets/readme-svg/headings/numbered-heading-4.svg" width="100%" />Create a `README.jsx` file:

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

<img src="./assets/readme-svg/headings/numbered-heading-5.svg" width="100%" /><table ><tr ><th >

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

`<UI.Alert type='NOTE' text='Important info' />`

</td><td >

> [!NOTE]
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

</td></tr></table>
<img src="./assets/readme-svg/headings/numbered-heading-6.svg" width="100%" />

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

<img src="./assets/readme-svg/headings/numbered-heading-7.svg" width="100%" /><table ><tr ><th width="30%">

**Component**

</th><th width="50%">

**Description**

</th><th width="20%">

**Example**

</th></tr><tr ><td >

`<UI.Alert>`

</td><td >

GitHub-style callout boxes

</td><td >

> [!NOTE]
> Like this!

</td></tr><tr ><td >

`<UI.Tasks>`

</td><td >

Interactive task lists

</td><td >

- [x] Done
- [ ] Todo

</td></tr><tr ><td >

`<UI.Kbd>`

</td><td >

Keyboard key styling

</td><td >

Press Ctrl+C

</td></tr></table>
<img src="./assets/readme-svg/headings/numbered-heading-8.svg" width="100%" />Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "readme": "npx readme.jsx README.jsx",
    "readme:watch": "npx readme.jsx README.jsx --watch"
  }
}
```

<img src="./assets/readme-svg/headings/numbered-heading-9.svg" width="100%" /><table ><tr ><td ><p align="center">**Traditional Markdown**

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
<img src="./assets/readme-svg/headings/numbered-heading-10.svg" width="100%" />

- 🔍 **Type Safety** - Catch errors at compile time
- 🔧 **IDE Support** - Full IntelliSense and autocomplete
- ♻️ **Reusability** - Create custom components and templates
- 🎨 **Rich Styling** - Advanced layouts and animations
- 📱 **Responsive** - Built-in responsive design patterns
- ⚡ **Fast** - Efficient compilation to standard Markdown
- 🧪 **Testable** - Unit test your documentation components

<img src="./assets/readme-svg/headings/numbered-heading-11.svg" width="100%" />We welcome contributions! Here's how you can help:

- [x] 🍴 Fork the repository
- [x] 🌿 Create a feature branch
- [ ] 💡 Add your amazing feature
- [ ] ✅ Write tests
- [ ] 📝 Update documentation
- [ ] 🚀 Submit a pull request
      <img src="./assets/readme-svg/headings/numbered-heading-12.svg" width="100%" />This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">**Made with ❤️ by the README.jsx team**
[⭐ Star us on GitHub](https://github.com/readme-jsx/readme.jsx)</p>
