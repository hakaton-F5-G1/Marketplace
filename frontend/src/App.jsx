import { Catalog } from './components/Catalog/Catalog';
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

  

  /*     const addProduct = (product) => {
          postProduct(product)
              .then(_ => setRequiresUpdate(true))
      }, [])
   */

      return (
        <>
          <div className="Routes">
           
            
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Catalog products={products} />}></Route>
                <Route path="/product/:idproduct" element={<ProductsItems />}></Route> 
                
              </Routes>
            </Router>
            
            
          </div>
        </>
      );
}

export default App;
