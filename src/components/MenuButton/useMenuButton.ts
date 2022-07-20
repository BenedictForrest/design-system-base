import uniqueId from "lodash.uniqueid"
import { OlHTMLAttributes, useState } from "react"

export default function useMenuButton() {
    // State
    const [menuId] = useState(uniqueId("menu-"))

    // Props
    const menuProps: OlHTMLAttributes<HTMLUListElement> = {
        id: menuId,
    }

    // Export
    return {
        menuProps,
    }
}
