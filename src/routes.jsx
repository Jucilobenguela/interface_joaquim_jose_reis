import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Page/Home/Home.jsx'
import Contact from "./Page/Contact/Contact.jsx"
import Sobre from "./Page/Sobre/Sobre.jsx"
import Service from "./Page/Service/Service.jsx"
import Product from "./Page/Product/Product.jsx"

function AppRoutes() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
            <Route path="/servico" element={<Service/>}></Route>
            <Route path="/produto" element={<Product/>}></Route>
            <Route path="/contacto" element={<Contact/>}></Route>
        </Routes>

    </BrowserRouter>
    )
}
export default AppRoutes