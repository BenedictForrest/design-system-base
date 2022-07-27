import { ReactNode } from "react"

import AccordionItem from "./AccordionItem"
import { AccordionContext } from "./context"
import { useAccordion } from "./hooks"

export type AccordionProps = {
    children: ReactNode
    initialItem?: string
}

const Accordion = ({ children, initialItem }: AccordionProps) => {
    const AccordionContextValue = useAccordion({ initialItem })

    return (
        <AccordionContext.Provider value={AccordionContextValue}>
            <div>{children}</div>
        </AccordionContext.Provider>
    )
}

Accordion.Item = AccordionItem

export default Accordion
