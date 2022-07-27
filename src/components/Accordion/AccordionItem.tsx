import { ReactNode, useContext } from "react"
import { AccordionContext } from "./context"

export type AccordionItemProps = {
    label: ReactNode
    children: ReactNode
}

const AccordionItem = ({ children, label }: AccordionItemProps) => {
    const {
        item,
        accordionItemHeaderAttributes,
        accordionItemRegionAttributes,
    } = useContext(AccordionContext)

    return (
        <>
            <h3 {...accordionItemHeaderAttributes}>
                <button aria-expanded={item === label}>{label}</button>
            </h3>
            <div {...accordionItemRegionAttributes}>{children}</div>
        </>
    )
}

export default AccordionItem
