import NavIcon from "../NavIcon/NavIcon"
import NavButtonComponent from "./NavButton"

export const NavButton = (): JSX.Element => {
    return (
        <NavButtonComponent>
            <NavIcon name="triangle-right" />
        </NavButtonComponent>
    )
}

export default {
    title: "Nav",
    component: NavButton,
}
