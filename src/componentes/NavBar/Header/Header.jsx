import React from "react";
import "../../../styles.scss";
import CartWidget from "../CardWidget/CartWidget";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <Link className="link" to="/">Inicio </Link>
        <Link className="link" to="/categoria/ferreteria">Ferreteria</Link>
        <Link className="link" to="/categoria/latex">Latex</Link>
        <Link className="link" to="/categoria/sinteticos">Sinteticos</Link>
        <Link className="link" to="/categoria/accesorios">Accesorios</Link>
        <CartWidget />
      </ul>
    </div>
  );
}

export default Header;
