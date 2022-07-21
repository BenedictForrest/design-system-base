import { NavLink } from "react-router-dom"

interface NavArticleProps {
    id: string
    name: string
}

export default function NavArticle({ id, name }: NavArticleProps) {
    return (
        <li className="nav-list-item">
            <NavLink className="nav-link nav-link-article" to={`content/${id}`}>
                {name}
            </NavLink>
        </li>
    )
}
