import { Product } from "../Product/Product";
import "./catalog.css";
import React from "react";



function Catalog({ products }) {
  const [state, setState] = React.useState({ filter: "" });
  function getData(val) {
    setState({ filter: val.target.value.toLowerCase() });
  }
  return (
    <main>
<<<<<<< HEAD
      <section className="head">
        <h2>Compra, regala y vende</h2>
        <label htmlFor="producto"></label>
        <input
          name="producto"
          type="text"
          onChange={getData}
          placeholder="Busca un producto específico por nombre, ciudad o caracteristicas"
        />
      </section>
=======
      <h2>Compra, regala y vende</h2>
      <label htmlFor="producto"></label>
      <input
        className="searchBar"
        name="producto"
        type="text"
        onChange={getData}
        placeholder="Busca un producto específico por nombre, ciudad o caracteristicas"
      />
>>>>>>> d750fd222d089048a6206e495cca53bdbe5f1f10
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
          return ""
        })}
      </section>
    </main>
  );
}

export { Catalog };
