import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from '../../services/getProductById';
import Modal from "./modal"

function ProductsItems() {
    const [isOpen, setIsOpen] = useState(false);
    const params = useParams()
    const [product, setProduct] = useState();
    
    useEffect(() => {
        getProductById(params.id)
            .then(data => setProduct(data))
    }, [params.id])

    return (
        <>
            {product &&
                <div className="product">
                    <div className="container-img">
                        <img className="img" src={product.image} alt="producto" />
                    </div>
                    <span className="container-info">
                        <p className="container-name">{product.name}</p>
                        <span className="container-subinfo">
                            <p className="container-info--price">{product.price}</p>
                        </span>
                        <p>{product.description}</p>
                    </span>
                    <button onClick={() => setIsOpen(true)}>Contacto</button>
            <Modal open = {isOpen} onClose = {() => setIsOpen(false)}>
                Telefono: 691233214
                Email: asdasd@gmail.com
            </Modal>
                </div> }
        </>
    )
}

export { ProductsItems }
