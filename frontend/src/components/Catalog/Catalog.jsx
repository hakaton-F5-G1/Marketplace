import { Product } from "../Product/Product"
import "./catalog.css"
import React from 'react'

function Catalog({ products }) {
    const [state,setState] = React.useState({filter:''})
    function getData(val) {
        setState({filter:val.target.value.toLowerCase()}) ;
        console.warn(val.target.value);
    }
    return (
        <main>
            <input type="text" onChange={getData} />
            
            <section className="catalog-container">
                {products.map((product) => {
                    if(product.name.toLowerCase().indexOf(state.filter) >= 0 || state.filter.length ===0){
                        return <Product key={product.id} product={product} />
                    }
                })}        
        </section>
      </main>

  )
}

export { Catalog }