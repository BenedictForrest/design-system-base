import { createContext, HTMLAttributes } from "react"

export type AccordionContextProps = {
    item: string
    accordionItemHeaderAttributes: HTMLAttributes<HTMLHeadingElement>
    accordionItemRegionAttributes: HTMLAttributes<HTMLDivElement>
}

export const AccordionContext = createContext<AccordionContextProps>({
    item: "",
    accordionItemHeaderAttributes: {},
    accordionItemRegionAttributes: {},
})
