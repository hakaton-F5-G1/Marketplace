
import { AddForm } from './components/AddForm/AddForm';
import Global from "./Global/Global";
import './App.css';
import { Catalog } from './components/Catalog/Catalog';
import { useEffect, useState } from "react";
import { getProducts } from './services/getProducts';
/* import { getProductById } from './services/getProductById'; */
import Navbar from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsItems } from './components/ProductsItems/ProductsItems';



function App() {
  /* const [requiresUpdate, setRequiresUpdate] = useState(true); */
  const [products, setProducts] = useState([]);
  console.log()

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data));
  });


	const addProduct = async (product) => {
		return fetch(Global.getProducts,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(product)
			}
		);
	}

  return (
		<div className = "App">
			<BrowserRouter>
				<Navbar />
				<Routes>
				<Route path="/" element={<Catalog products={products} />}></Route>
				<Route path="/product/:id" element={<ProductsItems />}></Route>
				<Route path="/add" element={<AddForm addProduct={addProduct} />}></Route>
			  </Routes>
			  <Footer/>
			</BrowserRouter>
		</div>
  );
	  
}

export default App;
