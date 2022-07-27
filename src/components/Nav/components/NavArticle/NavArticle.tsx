/** @jsxImportSource @emotion/react */
import { ReactNode, useState } from "react"
import NavButton from "../NavButton/NavButton"
import NavIcon from "../NavIcon/NavIcon"
import {
    NavArticleCSS,
    NavArticleActionsCSS,
    NavArticleNameCSS,
    NavArticleChildrenCSS,
} from "./NavArticle.styles"

export interface NavArticleProps {
    children?: ReactNode
    name: string
}
export default function NavArticle({ children, name }: NavArticleProps) {
    const [expanded, setExpanded] = useState(false)

    const handleOnExpand = () => setExpanded(!expanded)

    return (
        <li>
            <a css={NavArticleCSS} href="https://google.com/">
                <NavButton aria-expanded={expanded} onClick={handleOnExpand}>
                    <NavIcon name="triangle-right" />
                </NavButton>
                <div css={NavArticleNameCSS}>{name}</div>
                <NavButton css={NavArticleActionsCSS}>
                    <NavIcon name="dots-h" />
                </NavButton>
                <NavButton css={NavArticleActionsCSS}>
                    <NavIcon name="plus" />
                </NavButton>
            </a>
            {children && expanded && (
                <ul css={NavArticleChildrenCSS}>{children}</ul>
            )}
        </li>
    )
}
