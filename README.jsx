import { UI } from "./dist/ui/index.js"
export default <>
    <UI.Svg
        url="./assets/readme-svg/logo.svg"
        keyframes={[
            {
                name: "rotate",
                frames: [
                    {
                        percent: "0%",
                        style: {
                            transform: "rotate(3deg)"
                        }
                    },
                    {
                        percent: "100%",
                        style: {
                            transform: "rotate(-3deg)"
                        }
                    },
                ]
            },
            {
                name: "gradientBackground",
                frames: [
                    {
                        percent: "0%",
                        style: {
                            backgroundPosition: "0% 0%"
                        }
                    },
                    {
                        percent: "50%",
                        style: {
                            backgroundPosition: "100% 50%"
                        }
                    },
                    {
                        percent: "100%",
                        style: {
                            backgroundPosition: "0% 50%"
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
                        percent: "66%",
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
                fontFamily: 'system-ui ',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 0,
                width: '100%',
                height: 400,
                background: 'linear-gradient(-45deg, #fc5c7d, #6a82fb, #05dfd7)',
                backgroundSize: '600% 400%',
                animation: 'gradientBackground 10s ease infinite',
                borderRadius: 10,
                color: 'white',
                textAlign: 'center',
            },
            title: {
                fontSize: "80px",
                lineHeight: 1.3,
                letterSpacing: 5,
                textTransform: 'uppercase',
                textShadow: '0 1px 0 #efefef, 0 2px 0 #efefef, 0 3px 0 #efefef, 0 4px 0 #efefef, 0 12px 5px rgba(0, 0, 0, 0.1)',
                animation: 'rotate ease-in-out 1s infinite alternate',
            },
            subtitle: {
                fontSize: "40px",
                textShadow: '0 1px 0 #efefef',
                animation: '5s ease 0s normal forwards 1 fadeIn',
            }
        }}
        html={`<div id="container">
    <h1 id="title">README.jsx</h1>
    <p id="subtitle">The jsx to md compiler</p>
</div>`}
    />
    <UI.Image src="assets/animated.svg" />
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
