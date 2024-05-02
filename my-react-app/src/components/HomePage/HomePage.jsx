import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import { Route, Routes } from "react-router-dom"
import About from "../About/About"
import ProductsList from "../ProductsList/ProductsList"
import ItemDetails from "../ItemDetails/ItemDetails"
import NotFound from "../NotFound/NotFound"


import './HomePage.css'

const HomePage = () => {
    return (
        <div className="HomePage">
            <Navbar />
            <main className="main-content">
                <Sidebar />

                < Routes >

                    <Route path={'/Products'} element={<ProductsList />} />
                    <Route path={'/About'} element={<About />} />
                    <Route path={'/Products/ItemDetails/:itemId'} element={<ItemDetails />} />
                    <Route path={'*'} element={<NotFound />} />


                </Routes >

            </main>
        </div>
    )
}

export default HomePage


