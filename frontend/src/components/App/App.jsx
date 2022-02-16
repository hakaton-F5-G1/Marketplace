import { Catalog } from '../Catalog/Catalog';
import './App.css';
import { useEffect, useState } from "react";
import { getProducts } from '../../services/getProducts';


function App() {
  /* const [requiresUpdate, setRequiresUpdate] = useState(true); */
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts()
      .then(data => setProducts(data));
  }, []);

  /*   const fechear = async () => {
      const response = await fetch('http://192.168.1.10:5000/api/products');
      console.log(response)
      const data = await response.json();
      setProducts(data)
    } */
  /*     useEffect(() => {
          DataService.get()
                  .then(setProducts)
                  .then(_ => setRequiresUpdate(false));
          
      }, [])
   */

  /*     const addProduct = (product) => {
          postProduct(product)
              .then(_ => setRequiresUpdate(true))
      }, [])
   */

  return (
    <div className="App">
      <Catalog products={products} />
    </div>
  );
}

export default App;
