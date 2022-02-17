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
                <span className="container-subinfo">
                    <p className="container-info--price">{price}</p>
                    <button>Ver detalles</button>
                </span>
                
            </span>
        </div>
    )
}

export { Product }