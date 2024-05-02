import { useParams } from 'react-router-dom'
import productsData from './../../data/products.json'

const ItemDetails = () => {

    const { itemId } = useParams()
    const findItems = productsData.find(eachProduct => +eachProduct.id === +itemId)

    return (
        <div>
            <p>{findItems.description}</p>
            <hr />

        </div>
    )
}
export default ItemDetails