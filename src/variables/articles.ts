interface ArticleProps {
    id: string
    name: string
    parentCategoryId: string
}

const articles: ArticleProps[] = [
    {
        id: "what-is-elevio",
        name: "What is Elevio?",
        parentCategoryId: "start-here",
    },
]

export default articles
