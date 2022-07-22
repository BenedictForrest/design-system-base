/** @jsxImportSource @emotion/react */
import { NavIconCSS } from "./NavIcon.styles"

type NavIconName = "dots-h" | "plus" | "triangle-right"

export interface NavIconsProps {
    name: string
    path: string
}
const NavIcons: NavIconsProps[] = [
    {
        name: "dots-h",
        path: "M1.5 7.5C2.32843 7.5 3 6.82843 3 6C3 5.17157 2.32843 4.5 1.5 4.5C0.671573 4.5 0 5.17157 0 6C0 6.82843 0.671573 7.5 1.5 7.5ZM7.40002 6C7.40002 6.82843 6.72845 7.5 5.90002 7.5C5.0716 7.5 4.40002 6.82843 4.40002 6C4.40002 5.17157 5.0716 4.5 5.90002 4.5C6.72845 4.5 7.40002 5.17157 7.40002 6ZM12 6C12 6.82843 11.3284 7.5 10.5 7.5C9.67157 7.5 9 6.82843 9 6C9 5.17157 9.67157 4.5 10.5 4.5C11.3284 4.5 12 5.17157 12 6Z",
    },
    {
        name: "plus",
        path: "M6 1.25C6.41421 1.25 6.75 1.58579 6.75 2V5.25H10C10.4142 5.25 10.75 5.58579 10.75 6C10.75 6.41421 10.4142 6.75 10 6.75H6.75V10C6.75 10.4142 6.41421 10.75 6 10.75C5.58579 10.75 5.25 10.4142 5.25 10V6.75H2C1.58579 6.75 1.25 6.41421 1.25 6C1.25 5.58579 1.58579 5.25 2 5.25H5.25V2C5.25 1.58579 5.58579 1.25 6 1.25Z",
    },
    {
        name: "triangle-right",
        path: "M8.86043 5.3488L4.1221 2.64119C3.62211 2.35548 3 2.7165 3 3.29237V8.7076C3 9.28347 3.62211 9.64449 4.1221 9.35878L8.86043 6.65117C9.36429 6.36325 9.36429 5.63672 8.86043 5.3488Z",
    },
]

export interface NavIconProps {
    name: NavIconName
}

export default function NavIcon({ name: iconName }: NavIconProps) {
    const icon = NavIcons.filter(({ name }) => name === iconName)[0]

    if (!icon) {
        throw new Error(`No icon with the name: ${iconName}`)
    }

    return (
        <svg css={NavIconCSS} viewBox="0 0 12 12">
            <path d={icon.path} />
        </svg>
    )
}
