/** @jsxImportSource @emotion/react */
import NavButton from "../NavButton/NavButton"
import NavIcon from "../NavIcon/NavIcon"
import { NavArticleCSS, NavArticleNameCSS } from "./NavArticle.styles"

export interface NavArticleProps {
    name: string
}
export default function NavArticle({ name }: NavArticleProps) {
    return (
        <a css={NavArticleCSS} href="https://google.com/">
            <NavButton>
                <NavIcon name="triangle-right" />
            </NavButton>
            <div css={NavArticleNameCSS}>{name}</div>
            <NavButton>
                <NavIcon name="dots-h" />
            </NavButton>
            <NavButton>
                <NavIcon name="plus" />
            </NavButton>
        </a>
    )
}
