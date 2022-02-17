import { Product } from "../Product/Product";
import "./catalog.css";
import React from "react";

function Catalog({ products }) {
  const [state, setState] = React.useState({ filter: "" });
  function getData(val) {
    setState({ filter: val.target.value.toLowerCase() });
    console.warn(val.target.value);
  }
  return (
    <main>
      <label htmlFor="producto"></label>
      <input
        name="producto"
        type="text"
        onChange={getData}
        placeholder="Busca un producto específico por nombre, ciudad o caracteristicas"
      />
      <section className="catalog-container">
        {products.map((product) => {
          if (
            product.name.toLowerCase().indexOf(state.filter) >= 0 ||
            state.filter.length === 0
          ) {
            return <Product key={product.id} product={product} />;
          }
          if (
            product.city.toLowerCase().indexOf(state.filter) >= 0 ||
            state.filter.length === 0
          ) {
            return <Product key={product.id} product={product} />;
          }
          if (
            product.description.toLowerCase().indexOf(state.filter) >= 0 ||
            state.filter.length === 0
          ) {
            return <Product key={product.id} product={product} />;
          }
        })}
      </section>
    </main>
  );
}

export { Catalog };
