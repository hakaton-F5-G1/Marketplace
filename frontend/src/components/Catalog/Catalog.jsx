import { ActionAreaCard } from "../card-product/card-product"
import "./catalog.css"


function Catalog({products}) {
    return (
        <section className="catalog-container">
            {products.map(product => (
                <ActionAreaCard key={product.id} product={product}/>
            ))}        
      </section>
    

  )
}

export { Catalog }