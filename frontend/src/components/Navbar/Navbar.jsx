
import logo from "../assets/logo.png";
import line from "../assets/Line.png";
import Styles from "../Navbar/Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
      <div>
        <nav>
          
          <Link to="/">
            <img src={logo} className={Styles.logo} alt="Website" />
          </Link>

            <div className={Styles.Navbar}>
            <ul className={Styles.list}>
              
              <li>Productos</li>
              
            </ul>


            </div>
            
         
        </nav>
        <img src={line} className={Styles.line} alt="line" />
      
      </div>
      
      
        
     
    </>
  );
};

export default Navbar;
