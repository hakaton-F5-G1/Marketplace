import logo from "../../assets/logo.png";
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  
  return (
    <>
      <header>
        <nav>
				<div className="logo-container">
					<Link to="/">
					<img src={logo} className="logo" alt="Website" />
					</Link>
         	</div>
            
					<ul className="list">
							<li className="menuitem">
								<Link className="nav-link" to="/">Home</Link>
							</li>
					  <li className="menuitem">
						  <Link className="nav-link" to="/">Mi cuenta</Link>
					  </li>
							<li className="btn-publicar">
								<Link className="nav-link publicar" to="/add">Publica tu anuncio</Link>
							</li>
					</ul>
      
        </nav>
      </header> 
    </>
  );
};

export default Navbar;
