import categories from "../variables/categories"

export default function getCategories(parentCategoryId?: string) {
    return categories.filter(
        ({ parentCategoryId: parentCategoryIdValue }) =>
            parentCategoryIdValue === parentCategoryId
    )
}
