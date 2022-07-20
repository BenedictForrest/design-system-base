import getArticles from "../../functions/getArticles"
import getCategories from "../../functions/getCategories"

import NavArticle from "./NavArticle"

interface NavCategoryProps {
    id: string
    name: string
}

export default function NavCategory({ id, name }: NavCategoryProps) {
    const articles = getArticles(id)
    const categories = getCategories(id)

    return (
        <li className="nav-list-item">
            <button className="nav-toggle">
                <svg width="12" height="12" viewBox="0 0 12 12">
                    <path d="M8.86043 5.34883L4.1221 2.64122C3.62211 2.35551 3 2.71653 3 3.2924L3 8.70763C3 9.2835 3.62211 9.64452 4.1221 9.35881L8.86043 6.6512C9.36429 6.36328 9.36429 5.63675 8.86043 5.34883Z" />
                </svg>
            </button>
            <a className="nav-link" href="https://google.com/">
                {name}
            </a>
            {(articles.length > 0 || categories.length > 0) && (
                <ul className="nav-list">
                    {articles.map(({ id, name }, index) => {
                        return <NavArticle id={id} key={index} name={name} />
                    })}
                    {categories.map(({ id, name }, index) => {
                        return <NavCategory id={id} key={index} name={name} />
                    })}
                </ul>
            )}
        </li>
    )
}
