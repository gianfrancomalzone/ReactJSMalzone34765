import React from 'react';
import "../../styles.css";

function NavBar() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">eComerse</span>
      </a>
      <ul className="nav nav-pills mb-3 py-3 container">
        <li className="nav-item text-primary" >
          <a className="nav-link ">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  type="button">Carrito</a>
        </li>
      </ul>
    </header>
  )
}

export default NavBar