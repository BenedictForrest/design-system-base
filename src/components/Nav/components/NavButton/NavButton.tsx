/** @jsxImportSource @emotion/react */
import { MouseEvent, ReactNode } from "react"
import { NavButtonCSS } from "./NavButton.styles"

export interface NavButtonProps {
    children?: ReactNode
}

export default function NavButton({ children }: NavButtonProps) {
    const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        event.stopPropagation()
    }
    return (
        <button css={NavButtonCSS} onClick={handleOnClick}>
            {children}
        </button>
    )
}
