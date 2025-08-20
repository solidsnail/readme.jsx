import * as Readme from "../jsx.js"

export const Paypal = ({ id }: { id: string }) => {
    return <a href={`https://www.paypal.com/paypalme/${id}`}>
        <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" width="130" />
    </a>
}