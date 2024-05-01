import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import ProductsList from "../ProductsList/ProductsList"
import Sidebar from "../Sidebar/Sidebar"

import './HomePage.css'

const HomePage = () => {
    return (
        <div className="HomePage">
            <Navbar />
            <main className="main-content">
                <Sidebar />
                <ProductsList />
            </main>
        </div>
    )
}

export default HomePage