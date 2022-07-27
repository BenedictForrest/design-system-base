import { css } from "@emotion/react"

export const NavArticleCSS = css`
    --actionOpacity: 0;
    border-radius: 0.1875rem;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    display: flex;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    padding: 0.25rem;
    text-decoration: none;

    &:hover {
        --actionOpacity: 1;
        background-color: rgba(0, 0, 0, 0.04);
    }
`

export const NavArticleNameCSS = css`
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const NavArticleActionsCSS = css`
    opacity: var(--actionOpacity);
`

export const NavArticleChildrenCSS = css`
    padding-inline-start: 1.5rem;
`
