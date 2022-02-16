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


    /**const addExperience = (product) => {
        return fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(product)
            }
        ).then(_ => setRequiresUpdate(true))*/



  return (
    <div className="App">
      <Catalog products={products}/>
    </div>
  );
}

export default App;
