import { Catalog } from './components/Catalog/Catalog';
import './App.css';
import { useEffect, useState } from "react";
import { getProducts } from './services/getProducts';
import { getProductById } from './services/getProductById';
import Navbar from "./components/Navbar/Navbar"


function App() {
  /* const [requiresUpdate, setRequiresUpdate] = useState(true); */
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();

  const [idProduct, setIdProduct] = useState();

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    getProductById(idProduct)
      .then(data => setProduct(data))
  }, [idProduct])

  /*     const addProduct = (product) => {
          postProduct(product)
              .then(_ => setRequiresUpdate(true))
      }, [])
   */

  return (
    <div className="App">
      <Navbar />
      <Catalog products={products} />
      
    </div>
  );
}

export default App;
