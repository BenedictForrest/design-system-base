import { createContext } from "react"

export interface AppContextProps {
    openModalId: string
    setOpenModalId: (id: string) => void
    openModalTriggerId: string
    setOpenModalTriggerId: (id: string) => void
}

export const AppContext = createContext<AppContextProps>({
    openModalId: "",
    setOpenModalId: () => {},
    openModalTriggerId: "",
    setOpenModalTriggerId: () => {},
})
