import React from "react";
import { Link } from "react-router-dom";
import { NavbarDropdown } from "./navbarDropdown.jsx";
import "./navbar.css";

import logoPng from "../../../img/logo.png";
import logoWebp from "../../../img/logo.webp";

export const Navbar = (props) => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 mx-auto opacity-95">
			<div className="container">
				<Link to="/" className="ms-3">
					<picture>
						<source srcSet={logoWebp} type="image/webp" />
						<img src={logoPng} className="text-light" alt="Star Wars Logo" />
					</picture>
				</Link>
				<NavbarDropdown />
			</div>
		</nav>
	);
};
