import { useContext } from "react"
import { FieldContext } from "../Field/FieldContext"

type useLabelProps = {
    customHtmlFor?: string
}

export default function useLabel({ customHtmlFor }: useLabelProps) {
    const { inputId } = useContext(FieldContext)

    const htmlFor = customHtmlFor || inputId

    return { htmlFor }
}
