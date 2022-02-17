import logo from "../assets/logo.png";
import line from "../assets/Line.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <div className="logo-container">
            <Link to="/">
              <img src={logo} className="logo" alt="Website" />
            </Link>
          </div>

          <ul className="list">
            <li className="menuitem">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="menuitem">
              <Link className="nav-link" to="/animales">
                Animales
              </Link>
            </li>
            <li className="menuitem">
              <Link className="nav-link" to="/">
                Mi cuenta
              </Link>
            </li>
            <li className="btn-publicar">
              <Link className="nav-link publicar" to="/add">
                Publica tu anuncio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
