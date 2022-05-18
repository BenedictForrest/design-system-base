import { ReactNode } from "react"
import useLabel from "./useLabel"

export interface LabelProps {
    children: ReactNode
    htmlFor?: string
}

export default function Label({
    children,
    htmlFor: customHtmlFor,
}: LabelProps) {
    const { htmlFor } = useLabel({ customHtmlFor })

    return <label htmlFor={htmlFor}>{children}</label>
}
