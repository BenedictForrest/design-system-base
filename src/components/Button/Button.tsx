import { ButtonHTMLAttributes } from "react"
import useButton from "./useButton"

export default function Button({
    children,
    id: customId,
    onClick: customOnClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    // STATE
    const { buttonProps } = useButton({ customOnClick, customId })

    // RETURN
    return <button {...buttonProps}>{children}</button>
}
