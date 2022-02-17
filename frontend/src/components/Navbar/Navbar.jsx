import logo from "../assets/logo.png";
import line from "../assets/Line.png";
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  
  return (
    <>
      <div>
        <nav>

          <Link to="/">
          <img src={logo} className="logo" alt="Website" />
          </Link>
          
            <div>
            <ul className="list">
              <li className="menuitem">Productos</li>
            </ul>
            </div>
        </nav>
        <img src={line} className="line" alt="line" />
      </div>
      
      
        
     
    </>
  );
};

export default Navbar;
