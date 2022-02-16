import { Product } from "../../Product/Product"

function Catalog({products}) {
    return (
        <div className="catalog-container">
            {products.map(product => (
                <Product key={product.id} product={product}/>
            ))}        
      </div>
    
  )
}

export { Catalog }