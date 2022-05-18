import { createContext } from "react"

export interface ModalContextProps {
    modalId: string
}

export const ModalContext = createContext<ModalContextProps>({
    modalId: "",
})
