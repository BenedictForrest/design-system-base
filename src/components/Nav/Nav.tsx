import getCategories from "../../functions/getCategories"
import NavSection from "./NavSection"

import "./Nav.css"

export default function Nav() {
    const categories = getCategories()

    return (
        <nav className="nav">
            {categories.map(({ id, name }, index) => {
                return <NavSection id={id} key={index} name={name} />
            })}
        </nav>
    )
}
