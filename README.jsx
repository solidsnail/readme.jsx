import { UI } from "./dist/ui/index.js"
export default <>
    <UI.Heading text="readme.jsx" />
    <UI.Boxed>
        <UI.Image width="200px" src="https://raw.githubusercontent.com/solidsnail/readme.jsx/refs/heads/main/assets/logo.png" />
    </UI.Boxed>
    <UI.Br /><UI.Br />
    MIT License. See the  <UI.Link link="./LICENSE" description="LICENSE" />
    <UI.Br />
    <UI.List
        ordered
        list={[
            <UI.Bold text="No indentation requirements" />
        ]}
    />
    <UI.Hr />
    <UI.Br />
    <UI.Code code="console.log('cool')" />
    <UI.Br />
    <UI.Table
        rows={[
            [
                {
                    type: "th",
                    content: "Heading A"
                },
                {
                    type: "th",
                    content: "Heading B"
                },
                {
                    type: "th",
                    content: "Heading C"
                },
            ],
            [
                {
                    type: "td",
                    content: "Content A"
                },
                {
                    type: "td",
                    content: "Content B"
                },
                {
                    type: "td",
                    content: "Content C"
                },
            ],
        ]} />
    <UI.Tasks list={[
        {
            content: "Fix bug 124",
            done: true,
        },
        {
            content: "Add Feature 33",
            done: true,
        },
        {
            content: "Add unit tests",
            done: true,
        },
    ]} />
</>
