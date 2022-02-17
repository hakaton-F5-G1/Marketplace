import { useEffect, useState } from "react";
/* import { getProductById } from '../services/getProductById';/*/


function ProductsItems({  }) {
    const { name, image, price } = product
    const [product, setProduct] = useState();

    const [idProduct, setIdProduct] = useState();
    /*
    useEffect(() => {
        getProductById(idProduct)
          .then(data => setProduct(data))
      }, [idProduct])
    /*/
    
    return (
        <div className="product">
            <div className="container-img">
                <img className="img" src={image} alt="producto" />
            </div>
            <span className="container-info">
                <p className="container-name">{name}</p>
                <span className="container-subinfo">
                    <p className="container-info--price">{price}</p>
                </span>
                
            </span>
        </div>
    )
}

export { ProductsItems }