import uniqueId from "lodash.uniqueid"
import { HTMLAttributes, useContext, useState } from "react"
import { AppContext } from "../../AppContext"
import { ModalContextProps } from "./ModalContext"

interface useModalProps {
    customId?: string
    open: boolean
}

export default function useModal({ customId, open }: useModalProps) {
    const [id] = useState(customId || uniqueId("modal-"))

    const { openModalTriggerId, setOpenModalId, setOpenModalTriggerId } =
        useContext(AppContext)

    const modalContextValue: ModalContextProps = {
        modalId: id,
    }
    const modalProps: HTMLAttributes<HTMLDivElement> = {
        className: "modal",
        hidden: !open,
        id,
    }
    const onModalOpen = () => setOpenModalId(id)
    const onModalClose = () => {
        if (openModalTriggerId === id) {
            document.getElementById(openModalTriggerId)?.focus()
            setOpenModalTriggerId("")
            setOpenModalId("")
        }
    }
    const onModalUseEffect = () => {
        if (open) {
            setOpenModalId(id)
        } else {
            document.getElementById(openModalTriggerId)?.focus()
            setOpenModalTriggerId("")
            setOpenModalId("")
        }
    }

    return {
        modalContextValue,
        modalProps,
        onModalOpen,
        onModalClose,
        onModalUseEffect,
    }
}
