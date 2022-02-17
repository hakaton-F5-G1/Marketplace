
import logo from "../assets/logo.png";
import line from "../assets/Line.png";
import Styles from "../Navbar/Navbar.css"

const Navbar = () => {
  
  return (
    <>
      <div>
        <nav>
          
            <img src={logo} className={Styles.logo} alt="Website" />
            <div>
            <ul className={Styles.list}>
              <li className={Styles.menuitem}>Productos</li>
              
            </ul>


            </div>
            
         
        </nav>
        <img src={line} className={Styles.line} alt="line" />
      </div>
      
      
        
     
    </>
  );
};

export default Navbar;
