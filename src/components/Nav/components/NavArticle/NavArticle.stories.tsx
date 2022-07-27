import NavArticleComponent from "./NavArticle"

export const NavArticle = (): JSX.Element => {
    return (
        <ul style={{ inlineSize: "15rem" }}>
            <NavArticleComponent name="Name">
                <NavArticleComponent name="Name" />
                <NavArticleComponent name="Name">
                    <NavArticleComponent name="Name" />
                    <NavArticleComponent name="Name that is very long so it will trim" />
                    <NavArticleComponent name="Name" />
                </NavArticleComponent>
                <NavArticleComponent name="Name" />
            </NavArticleComponent>
        </ul>
    )
}

export default {
    title: "Nav",
    component: NavArticle,
}
