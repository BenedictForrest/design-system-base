import { ReactNode } from "react"
import { MenuButtonContext } from "./MenuButtonContext"
import useMenuButton from "./useMenuButton"

interface MenuButtonProps {
    children: ReactNode
}

export default function MenuButton({ children }: MenuButtonProps) {
    const { menuProps } = useMenuButton()

    const modalContextValue = {
        menuProps,
    }

    return (
        <MenuButtonContext.Provider value={modalContextValue}>
            {children}
        </MenuButtonContext.Provider>
    )
}
