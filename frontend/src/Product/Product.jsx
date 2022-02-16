import "./products.css"

function Product({ product }) {
    const { name, image, price } = product
    return (
        <div className="product">
            <div className="container-img">
                <img className="img" src={image} alt="producto" />
            </div>
            <span className="container-info">
                <p className="container-name">{name}</p>
                <p className="container-info--price">{price}</p>
            </span>
        </div>
    )
}

export { Product }