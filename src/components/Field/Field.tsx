import uniqueId from "lodash.uniqueid"
import { ReactNode, useState } from "react"
import { FieldContext, FieldContextProps } from "./FieldContext"

interface FieldProps {
    children: ReactNode
}
export default function Field({ children }: FieldProps) {
    const [inputId] = useState(uniqueId("input-"))

    const context: FieldContextProps = {
        inputId,
    }

    return (
        <FieldContext.Provider value={context}>
            <div>{children}</div>
        </FieldContext.Provider>
    )
}
