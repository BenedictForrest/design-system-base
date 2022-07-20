import { createContext, OlHTMLAttributes } from "react"

export interface MenuButtonContextProps {
    menuProps: OlHTMLAttributes<HTMLUListElement>
}

export const MenuButtonContext = createContext<MenuButtonContextProps>({
    menuProps: {},
})
