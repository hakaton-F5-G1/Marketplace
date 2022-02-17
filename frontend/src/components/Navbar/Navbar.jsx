
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
