import Button from "./components/Button"
import Menu from "./components/Menu"
import MenuButton from "./components/MenuButton/MenuButton"

export default function App() {
    return (
        <MenuButton>
            <Button>Menu</Button>
            <Menu>
                <Menu.Title>Account</Menu.Title>
                <Menu.Item>View Profile</Menu.Item>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Divider />
                <Menu.Item>Show keyboard shortcuts</Menu.Item>
                <Menu.Item>Help &amp; Support</Menu.Item>
                <Menu.Item>API</Menu.Item>
                <Menu.Divider />
                <Menu.Item>Sign out</Menu.Item>
            </Menu>
        </MenuButton>
    )
}
