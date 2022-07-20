import getCategories from "../../functions/getCategories"
import NavCategory from "./NavCategory"

interface NavSectionProps {
    id: string
    name: string
}

export default function NavSection({ id, name }: NavSectionProps) {
    const categories = getCategories(id)

    return (
        <section className="nav-section">
            <h3 className="nav-title">{name}</h3>
            {categories.length && (
                <ul className="nav-list">
                    {categories.map(({ id, name }) => {
                        return <NavCategory id={id} name={name} />
                    })}
                </ul>
            )}
        </section>
    )
}
