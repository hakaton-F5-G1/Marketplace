import { AddForm } from "./components/AddForm/AddForm";
import Global from "./Global/Global";
import "./App.css";
import { Catalog } from "./components/Catalog/Catalog";
import { useEffect, useState } from "react";
import { getProducts } from "./services/getProducts";
/* import { getProductById } from './services/getProductById'; */
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsItems } from "./components/ProductsItems/ProductsItems";
import { Landing } from "./components/landing/landing";
import { Favorites } from "./components/Favorites/Favorites";
function App() {
  /* const [requiresUpdate, setRequiresUpdate] = useState(true); */
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  });

  const addProduct = async (product) => {
    return fetch(Global.getProducts, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/animales"
            element={<Catalog products={products} />}
          ></Route>
          <Route
            path="/animales/animal/:id"
            element={<ProductsItems />}
          ></Route>
          <Route
            path="/agregar"
            element={<AddForm addProduct={addProduct} />}
          ></Route>
          <Route
            path="/favoritos"
            element={<Favorites/>}
          ></Route>
        </Routes>
        {/* <button onClick={addProduct}>CLick</button> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
