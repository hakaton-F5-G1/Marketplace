import { Catalog } from '../Catalog/Catalog';
import './App.css';
import {useEffect, useState} from "react";


function App() {
    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        DataService.get()
                .then(setProducts)
                .then(_ => setRequiresUpdate(false));
        
    }, [])


    const addProduct = (product) => {
        postProduct(product)
            .then(_ => setRequiresUpdate(true))



  return (
    <div className="App">
      <Catalog products={products}/>
    </div>
  );
}

export default App;
