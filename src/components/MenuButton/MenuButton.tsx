import uniqueId from "lodash.uniqueid"
import { Children, ReactNode, useState } from "react"

interface MenuButtonProps {
    children: ReactNode
}

export default function MenuButton({ children }: MenuButtonProps) {
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
        switch (event.key) {
            case "ArrowDown":
            case "Space":
            case "Enter":
                event.preventDefault()
                openMenu()
                moveFocusToFirstItem()
                break
            case "ArrowUp":
                event.preventDefault()
                openMenu()
                moveFocusToLastItem()
        }
    }

    // Handlers / MenuItem / onKeyPress
    const onMenuItemKeyPress = (event: KeyboardEvent) => {
        switch (event.key) {
            case "Tab":
                closeMenu()
                break
            case "Escape":
                event.preventDefault()
                closeMenu()
                moveFocusToButton()
                break
            case "ArrowDown":
                event.preventDefault()
                moveFocusToNextItem()
                break
            case "ArrowUp":
                event.preventDefault()
                moveFocusToPrevItem()
        }
    }
}
