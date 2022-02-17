import { Catalog } from './components/Catalog/Catalog';
import { AddForm } from './components/AddForm/AddForm';
import Global from "./Global/Global";
import './App.css';
import { useEffect, useState } from "react";
import { getProducts } from './services/getProducts';
import { getProductById } from './services/getProductById';
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductsItems } from './components/ProductsItems/ProductsItems';




function App() {
  /* const [requiresUpdate, setRequiresUpdate] = useState(true); */
  const [products, setProducts] = useState([]);


  useEffect(() => {
    getProducts()
      .then(data => setProducts(data));
  }, []);


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
        <>
          <div className="Routes">
           
            
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Catalog products={products} />}></Route>
                <Route path="/product/:idproduct" element={<ProductsItems />}></Route> 					
					 <Route path="/add" element={<AddForm addProduct={addProduct} />}></Route> 
							
              </Routes>
            </Router>
            
            
          </div>
        </>
      );
}

export default App;
