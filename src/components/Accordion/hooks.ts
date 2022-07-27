import uniqueId from "lodash.uniqueid"
import { useState } from "react"
import { AccordionProps } from "./Accordion"
import { AccordionContextProps } from "./context"

export type useAccordionProps = Pick<AccordionProps, "initialItem">

export const useAccordion = ({
    initialItem = "",
}: useAccordionProps): AccordionContextProps => {
    const [item] = useState(initialItem)

    // Accordion.Item
    const [accordionItemHeaderID] = useState(uniqueId("accordion-item-header-"))
    const [accordionItemRegionID] = useState(uniqueId("accordion-item-region-"))

    return {
        item,
        accordionItemHeaderAttributes: {
            id: accordionItemHeaderID,
        },
        accordionItemRegionAttributes: {
            id: accordionItemRegionID,
            role: "region",
        },
    }
}
