import articles from "../variables/articles"

export default function getArticles(parentCategoryId?: string) {
    return articles.filter(
        ({ parentCategoryId: parentCategoryIdValue }) =>
            parentCategoryIdValue === parentCategoryId
    )
}
