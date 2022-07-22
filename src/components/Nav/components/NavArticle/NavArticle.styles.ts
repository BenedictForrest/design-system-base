import { css } from "@emotion/react"

export const NavArticleCSS = css`
    border-radius: 0.1875rem;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    display: flex;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    inline-size: 10rem;
    line-height: 1.25rem;
    padding: 0.25rem;
    text-decoration: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
`

export const NavArticleNameCSS = css`
    flex-grow: 1;
`
