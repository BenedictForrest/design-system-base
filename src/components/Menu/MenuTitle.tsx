import { ReactNode } from "react"

interface MenuTitleProps {
    children: ReactNode
}

export function MenuTitle({ children }: MenuTitleProps) {
    return <div className="menu-title">{children}</div>
}
