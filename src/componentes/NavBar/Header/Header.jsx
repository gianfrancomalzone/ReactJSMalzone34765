import React from "react";
import "./header.css";
import CartWidget from "../CardWidget/CartWidget";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <Link className="link" to="/">Inicio </Link>
        <Link className="link" to="/category/sedan">Sedan</Link>
        <Link className="link" to="/category/camioneta">Camionetas</Link>
        <Link className="link" to="/category/rally">Autos de Rally</Link>
        <Link className="link" to="/category/deportivo">Deportivos</Link>
        <Link className="link" to="/category/coupe">Copues</Link>
        <CartWidget />
      </ul>
    </div>
  );
}

export default Header;
