import { uniqueId } from "lodash"
import { ReactNode, useState } from "react"
import { MenuDivider } from "./MenuDivider"
import { MenuItem } from "./MenuItem"
import { MenuTitle } from "./MenuTitle"
import "./styles.css"

interface MenuProps {
    children: ReactNode
}

function Menu({ children }: MenuProps) {
    const [menuID] = useState(uniqueId("menu-"))

    return (
        <ul id={menuID} className="menu" role="menu">
            {children}
        </ul>
    )
}

Menu.Item = MenuItem
Menu.Divider = MenuDivider
Menu.Title = MenuTitle

export default Menu
