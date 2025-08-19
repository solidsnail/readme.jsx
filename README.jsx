import { UI } from "./dist/ui/index.js"
export default <>
    <UI.Svg
        url="./assets/readme-svg/logo.svg"
        keyframes={[
            {
                name: "textWave",
                frames: [
                    {
                        percent: "0%",
                        style: {
                            transform: "translateY(0px)"
                        }
                    },
                    {
                        percent: "50%",
                        style: {
                            transform: "translateY(-10px)"
                        }
                    },
                    {
                        percent: "100%",
                        style: {
                            transform: "translateY(0px)"
                        }
                    },
                ]
            },
            {
                name: "fadeIn",
                frames: [
                    {
                        percent: "0%",
                        style: {
                            opacity: "0"
                        }
                    },
                    {
                        percent: "100%",
                        style: {
                            opacity: "1"
                        }
                    },
                ]
            },
        ]}
        style={{
            container: {
                fontFamily: 'system-ui',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 0,
                width: '100%',
                height: 400,
                background: 'transparent', // ✅ removed gradient background
                color: '#111',             // dark text since no background
                textAlign: 'center',
            },
            title: {
                fontSize: "80px",
                fontWeight: "bold",
                lineHeight: 1.3,
                letterSpacing: 5,
                textTransform: 'uppercase',
                animation: 'textWave 2s ease-in-out infinite, fadeIn 2s ease forwards',
            },
            subtitle: {
                fontSize: "32px",
                marginTop: "10px",
                fontFamily: "monospace",
                opacity: 0,
                animation: 'fadeIn 3s ease forwards 1s',
            }
        }}
        html={`<div id="container">
    <h1 id="title">README.jsx</h1>
    <p id="subtitle">The jsx to md compiler</p>
</div>`}
    />

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
            done: false,
        },
        {
            content: "Add unit tests",
            done: false,
        },
    ]} />
    <UI.Br />
    <UI.Accordion title="A collapsible">
        <UI.Kbd text="Ctrl + L" /><UI.Br />
        <UI.Kbd text="Ctrl + S" /><UI.Br />
        <UI.Kbd text="Ctrl + F" />
    </UI.Accordion>
    <UI.Br />
    <UI.Emoji emjoji=":baby:" />
    <UI.Br />

</>
