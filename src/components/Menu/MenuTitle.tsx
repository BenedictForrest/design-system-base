import { ReactNode } from "react"

interface MenuTitleProps {
    children: ReactNode
}

export function MenuTitle({ children }: MenuTitleProps) {
    return (
        <li className="menu-title" role="presentation">
            {children}
        </li>
    )
}
