import { Catalog } from '../Catalog/Catalog';
import './App.css';

function App() {
  const products = [{ id: "1", name: "nike", image: "https://m.media-amazon.com/images/I/61ccMD0XMBL._AC_UY395_.jpg", price: 1200, description: "Producto" }, { id: "2", name: "rebook", image: "https://m.media-amazon.com/images/I/61ccMD0XMBL._AC_UY395_.jpg", price: 1200, description: "Producto" }, { id: "3", name: "rebook", image: "https://m.media-amazon.com/images/I/61ccMD0XMBL._AC_UY395_.jpg", price: 1200, description: "Producto" }]

  return (
    <div className="App">
      <Catalog products={products}/>
    </div>
  );
}

export default App;
