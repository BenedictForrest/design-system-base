import { ReactNode } from "react"
import { MenuDivider } from "./MenuDivider"
import { MenuItem } from "./MenuItem"
import { MenuTitle } from "./MenuTitle"
import "./styles.css"

interface MenuProps {
    children: ReactNode
}

function Menu({ children }: MenuProps) {
    return <div>{children}</div>
}

Menu.Item = MenuItem
Menu.Divider = MenuDivider
Menu.Title = MenuTitle

export default Menu
