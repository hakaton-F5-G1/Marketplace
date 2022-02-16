function Product({ product }) {
    const{name, image, price} = product
    return (
        <div className="product">
            <div>
                <img src={image} alt="producto" />
            </div>
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export {Product}