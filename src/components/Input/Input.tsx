import useInput from "./useInput"

export interface InputProps {
    id?: string
}

export default function Input({ id: customId }: InputProps) {
    // STATE
    const { id, tabIndex } = useInput({ customId })

    // RETURN
    return <input id={id} tabIndex={tabIndex} />
}
