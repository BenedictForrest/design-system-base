import { BrowserRouter } from "react-router-dom"

import Nav from "./components/Nav/Nav"

export default function App() {
    return (
        <BrowserRouter>
            <Nav />
        </BrowserRouter>
    )
}
