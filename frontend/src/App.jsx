import { Catalog } from './components/Catalog/Catalog';
import Global from "./Global/Global";
import './App.css';
import { useEffect, useState } from "react";
import { getProducts } from './services/getProducts';
import { getProductById } from './services/getProductById';


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


	const addProduct = (product) => {
		return fetch(Global.getProducts,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(product)
			}
		).then(data => setProducts(data));
	}

  return (
    <div className="App">
      <Catalog products={products} />
    </div>
  );
}

export default App;
