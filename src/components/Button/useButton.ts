import uniqueId from "lodash.uniqueid"
import {
    ButtonHTMLAttributes,
    MouseEvent,
    MouseEventHandler,
    useContext,
    useState,
} from "react"
import { AppContext } from "../../AppContext"
import { ModalContext } from "../Modal/ModalContext"

interface useInputProps {
    customId?: string
    customOnClick?: MouseEventHandler<HTMLButtonElement>
}

export default function useInput({ customId, customOnClick }: useInputProps) {
    const { modalId } = useContext(ModalContext)
    const { openModalId, setOpenModalTriggerId } = useContext(AppContext)

    const [id] = useState(customId || uniqueId("button-"))
    const tabIndex = openModalId === modalId ? undefined : -1
    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        !modalId && setOpenModalTriggerId(id)
        customOnClick && customOnClick(event)
    }

    const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
        id,
        onClick,
        tabIndex,
    }

    return { buttonProps }
}
