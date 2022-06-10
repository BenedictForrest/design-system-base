import { useState } from "react"

export default function Nav() {
    const [open, setOpen] = useState(false)
    const classNames = `nav${open ? " open" : ""}`
    const buttonOnClick = () => setOpen(!open)
    const buttonText = open ? "«" : "»"

    return (
        <nav className={classNames}>
            <button onClick={buttonOnClick}>{buttonText}</button>
        </nav>
    )
}
