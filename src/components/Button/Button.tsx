import { ButtonHTMLAttributes } from "react"

export default function Button({
    children,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button>{children}</button>
}
