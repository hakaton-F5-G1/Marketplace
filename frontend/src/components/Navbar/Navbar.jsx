import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import line from "../assets/Line.png";
import "./Navbar.css"

const Navbar = () => {
  
  return (
    <>
      <div>
        <nav>
            <img src={logo} className="logo" alt="Website" />
            <div>
					<ul className="list">
							<li className="menuitem">
								<Link className="nav-link" to="/">Productos</Link>
							</li>
							<li className="menuitem">
								<Link className="nav-link" to="/add">Añadir anuncio</Link>
							</li>
					</ul>
            </div>
        </nav>
        <img src={line} className="line" alt="line" />
      </div>
      
      
        
     
    </>
  );
};

export default Navbar;
