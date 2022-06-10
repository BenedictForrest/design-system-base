import { useState } from "react"

export default function SidebarRight() {
    const [closed, setClosed] = useState(false)
    const classNames = `sidebar-right${closed ? " closed" : ""}`
    const buttonOnClick = () => setClosed(!closed)
    const buttonText = closed ? "«" : "»"

    return (
        <aside className={classNames}>
            <button onClick={buttonOnClick}>{buttonText}</button>
        </aside>
    )
}
