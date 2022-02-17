import React from "react";
import { Link } from "react-router-dom"
import "./footer.css"
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";


export const Footer = () => {
	return (
		<footer className="footer">
			<div className="bottomNavBar-container">
	
				<nav className="bottomNavBar">

					<div className="bottomNavBar-brand">
						<h3><a href="#">Reanimales.net</a></h3>
						<p>Regálales nueva vida</p>
					</div>
					<div>
						<ul className="bottomNavBar-links">
							<li className="nav-item">
								<a className="nav-link" href="#">Sobre nosotros</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Contactos</a>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">Animales</Link>
							</li>
						</ul>
					</div>

					<div className="social">
						<a href="#">
							<img className={"icono-rs"} src={twitter} alt={"Twitter logo"} />
						</a>

						<a href="#">
							<img className={"icono-rs"} src={instagram} alt={"Instagram logo"} />
						</a>

						<a href="#">
							<img className={"icono-rs"} src={facebook} alt={"Facebook logo"} />
						</a>
					</div>

				</nav>
			</div>
		</footer>
	);
}