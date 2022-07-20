import uniqueId from "lodash.uniqueid"
import { Children, ReactNode, useState } from "react"

interface useMenuButtonProps {
    children: ReactNode
}

export default function useMenuButton({ children }: useMenuButtonProps) {
    // State
    const [menuOpen, setMenuOpen] = useState(false)
    const [focusIndex, setFocusIndex] = useState(0)

    // Variables
    const [buttonId] = useState(uniqueId("button-"))
    const [menuId] = useState(uniqueId("menu-"))
    const [menuItemId] = useState(uniqueId(`${menuId}-item-`))
    const childrenLength = Children.count(children)

    // Functions
    const openMenu = () => setMenuOpen(true)
    const closeMenu = () => setMenuOpen(false)
    const moveFocusToFirstItem = () => {
        setFocusIndex(0)
    }
    const moveFocusToLastItem = () => {}
    const moveFocusToPrevItem = () => {}
    const moveFocusToNextItem = () => {}
    const moveFocusToButton = () => document.getElementById(buttonId)?.focus()

    // Handlers
    // Handlers / Button / onClick
    const onButtonClick = () => {
        openMenu()
    }

    // Handlers / Button / onKeyPress
    const onButtonKeyPress = (event: KeyboardEvent) => {
        if (
            event.key === "ArrowDown" ||
            event.key === "Space" ||
            event.key === "Enter"
        ) {
            event.preventDefault()
            openMenu()
            moveFocusToFirstItem()
        } else if (event.key === "ArrowUp") {
            event.preventDefault()
            openMenu()
            moveFocusToLastItem()
        }
    }

    // Handlers / MenuItem / onKeyPress
    const onMenuItemKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
            closeMenu()
        } else if (event.key === "Escape") {
            event.preventDefault()
            closeMenu()
            moveFocusToButton()
        } else if (event.key === "ArrowDown") {
            event.preventDefault()
            moveFocusToNextItem()
        } else if (event.key === "ArrowUp") {
            event.preventDefault()
            moveFocusToPrevItem()
        }
    }

    // EXPORT
    return {
        onButtonClick,
        onButtonKeyPress,
        onMenuItemKeyPress,
    }
}
