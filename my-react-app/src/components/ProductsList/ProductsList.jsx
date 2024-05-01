import { useState } from "react"
import ProductRow from "../ProductRow/ProductRow"
import productsData from "./Products.json"

const ProductsList = () => {

    const [products, setProducts] = useState(productsData)
    const deleteProduct = productIdToDelete => {
        const filteredProducts = products.filter(eachProduct => eachProduct.id != productIdToDelete)
        setProducts(filteredProducts)



    }

    return (
        <div className="ProductsList">
            <h1>Soy la lista de productos</h1>
            <hr />
            {
                products.map(eachProduct => {
                    return <ProductRow productInfo={eachProduct} deleteProduct={deleteProduct} key={eachProduct.id} />
                })
            }
        </div>
    )
}

export default ProductsList