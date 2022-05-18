import { createContext } from "react"

export interface FieldContextProps {
    inputId: string
}
export const FieldContext = createContext<FieldContextProps>({
    inputId: "",
})
