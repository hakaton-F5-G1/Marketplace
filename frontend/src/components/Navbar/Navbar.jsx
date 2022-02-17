import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import hamburguer from "../assets/hamburguer.png";
import { useState } from "react";

const Navbar = () => {
  const [statusMenu, setStatusMenu] = useState(false);
  const changeMenu = () => {
    setStatusMenu(!statusMenu);
  };
  return (
    <>
      <div>
        <nav>
          <div className="logo-container">
            <Link to="/">
              <img src={logo} className="logo" alt="Website" />
            </Link>
          </div>
          <ul className={`list ${statusMenu && "hide"}`}>
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
            <li className="btn-publicar">
              <Link className="nav-link publicar" to="/añadir">
                Publica tu anuncio
              </Link>
            </li>
            <button onClick={changeMenu} className="close-hamburguer">
              x
            </button>
          </ul>
          <button className="open-hamburguer" onClick={changeMenu}>
            <img src={hamburguer} alt="" />
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
