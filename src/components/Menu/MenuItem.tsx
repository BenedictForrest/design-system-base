import { ReactNode } from "react"

interface MenuItemProps {
    children: ReactNode
}

export function MenuItem({ children }: MenuItemProps) {
    return (
        <li className="menu-item" role="menuitem" tabIndex={0}>
            {children}
        </li>
    )
}
