import React from "react";
import "./header.css";
import CartWidget from "../CardWidget/CartWidget";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <Link className="link" to="/">Inicio </Link>
        <Link className="link" to="/autos">Autos</Link>
        <Link className="link" to="/category/deportivos">Deportivos</Link>
        <Link className="link" to="/category/rally">Rally</Link>
        <CartWidget />
      </ul>
    </div>
  );
}

export default Header;
