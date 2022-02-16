import { Product } from "../../Product/Product"
import "./catalog.css"

function Catalog({products}) {
    return (
        <section className="catalog-container">
            {products.map(product => (
                <Product key={product.id} product={product}/>
            ))}        
      </section>
    
  )
}

export { Catalog }