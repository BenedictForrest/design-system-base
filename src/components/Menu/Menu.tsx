import { ReactNode, useContext } from "react"
import { MenuButtonContext } from "../MenuButton/MenuButtonContext"
import { MenuDivider } from "./MenuDivider"
import { MenuItem } from "./MenuItem"
import { MenuTitle } from "./MenuTitle"
import "./styles.css"

interface MenuProps {
    children: ReactNode
}

function Menu({ children }: MenuProps) {
    const { menuProps } = useContext(MenuButtonContext)

    return (
        <ul {...menuProps} className="menu" role="menu">
            {children}
        </ul>
    )
}

Menu.Item = MenuItem
Menu.Divider = MenuDivider
Menu.Title = MenuTitle

export default Menu
