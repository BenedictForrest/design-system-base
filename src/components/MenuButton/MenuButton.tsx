import { ReactNode } from "react"
import { MenuButtonContext } from "./MenuButtonContext"

interface MenuButtonProps {
    children: ReactNode
}

export default function MenuButton({ children }: MenuButtonProps) {
    const modalContextValue = {
        menuId: "test",
    }

    return (
        <MenuButtonContext.Provider value={modalContextValue}>
            {children}
        </MenuButtonContext.Provider>
    )
}
