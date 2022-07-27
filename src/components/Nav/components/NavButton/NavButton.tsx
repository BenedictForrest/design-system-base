/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react"
import { NavButtonCSS } from "./NavButton.styles"

export interface NavButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}

export default function NavButton({
    children,
    onClick,
    ...props
}: NavButtonProps) {
    const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        event.stopPropagation()
        onClick && onClick(event)
    }
    return (
        <button css={NavButtonCSS} onClick={handleOnClick} {...props}>
            {children}
        </button>
    )
}
