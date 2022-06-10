import { ReactNode } from "react"

interface MenuItemProps {
    children: ReactNode
}

export function MenuItem({ children }: MenuItemProps) {
    return <div>{children}</div>
}
