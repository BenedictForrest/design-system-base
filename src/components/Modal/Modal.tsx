import { ReactNode, useEffect } from "react"
import { ModalContext } from "./ModalContext"
import useModal from "./useModal"
import "./Modal.css"

interface ModalProps {
    children: ReactNode
    id?: string
    open: boolean
}

export default function Modal({ children, id: customId, open }: ModalProps) {
    const { modalContextValue, modalProps, onModalUseEffect } = useModal({
        customId,
        open,
    })

    useEffect(() => {
        onModalUseEffect()
    }, [onModalUseEffect, open])

    return (
        <ModalContext.Provider value={modalContextValue}>
            <div {...modalProps}>{children}</div>
        </ModalContext.Provider>
    )
}
