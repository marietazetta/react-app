const StudentRow = ({ productInfo, deleteProduct }) => {

    return (
        <div className="StudentRow">
            <h1>{productInfo.title}</h1>
            <p>Price: {productInfo.price}</p>
            <p>Brand: {productInfo.brand}</p>
            <p>{productInfo.price <= 600 ? 'GET ITTT🥳 ' : 'OHHH SORRY🖕'} </p>
            <button className="btn-delete" onClick={() => deleteProduct(productInfo.id)}>DELETE</button>
        </div>
    )

}

export default StudentRow