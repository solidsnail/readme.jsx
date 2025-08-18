import { Hr } from "./dist/ui/hr.js"
import { Br } from "./dist/ui/br.js"
import { Bold } from "./dist/ui/bold.js"
import { Boxed } from "./dist/ui/boxed.js"
import { Image } from "./dist/ui/image.js"
import { Heading } from "./dist/ui/heading.js"
import { List } from "./dist/ui/list.js"

export default <>
    <Heading text="readme.jsx" />
    <Boxed>
        <Image width="200px" src="https://raw.githubusercontent.com/solidsnail/readme.jsx/refs/heads/main/assets/logo.png" />
    </Boxed>
    <Br />
    <List
        list={[
            <Bold text="No indentation requirements" />
        ]}
    />
    <Hr />
</>
