import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { FieldContext } from "../Field/FieldContext"
import { ModalContext } from "../Modal/ModalContext"

type useInputProps = {
    customId?: string
}

export default function useInput({ customId }: useInputProps) {
    const { inputId } = useContext(FieldContext)
    const { modalId } = useContext(ModalContext)
    const { openModalId } = useContext(AppContext)

    const id = customId || inputId

    const tabIndex = openModalId === modalId ? undefined : -1

    return { id, tabIndex }
}
