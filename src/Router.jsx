import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { About } from "./pages/About"
import { Home } from "./pages/Home/index"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}