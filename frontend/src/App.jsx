
import { AddForm } from './components/AddForm/AddForm';
import './App.css';
import { Catalog } from './components/Catalog/Catalog';
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsItems } from "./components/ProductsItems/ProductsItems";
import { Landing } from "./components/landing/landing";
import { Favorites } from "./components/Favorites/Favorites";
import DataService from './services/DataService';
function App() {
  const [requiresUpdate, setRequiresUpdate] = useState(true); 
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    requiresUpdate?
		DataService.getData()
			.then(data =>
				{
					setProducts(data);
					setRequiresUpdate(false);
				})
		:console.log("up to date");
		 
  },[requiresUpdate]);


	const addProduct =  (product) => {
		DataService.addNew(product)
		return setRequiresUpdate(true)
	}

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
		  <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
