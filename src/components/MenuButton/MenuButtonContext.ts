import { createContext } from "react"

export interface MenuButtonContextProps {
    menuId: string
}

export const MenuButtonContext = createContext<MenuButtonContextProps>({
    menuId: "",
})
