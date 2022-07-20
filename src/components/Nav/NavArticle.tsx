interface NavArticleProps {
    id: string
    name: string
}

export default function NavArticle({ id, name }: NavArticleProps) {
    return (
        <li className="nav-list-item">
            <a className="nav-link" href="https://google.com/">
                {name}
            </a>
        </li>
    )
}
