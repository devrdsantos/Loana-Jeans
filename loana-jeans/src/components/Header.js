import React from "react";
import "../styles/header.css";
import CarouselMain from "./CarouselMain";

function Header() {
  return (
    <header>
      <div className="barraSuperiorHeader">
        <p>
          3 cuotas sin interés con todas las tarjetas de crédito | Envío gratis
          a todo el país desde $20.000.
        </p>
      </div>
      <nav ClassName="navbar-header">
        <ul ClassName="navbar-header-ul">
          <li ClassName="navbar-header-li">Logo</li>
          <li ClassName="navbar-header-li">Jeans</li>
          <li ClassName="navbar-header-li">Shorts</li>
          <li ClassName="navbar-header-li">Camperas</li>
          <li ClassName="navbar-header-li">Ofertas</li>
          <li ClassName="navbar-header-li">Buscador y Logos</li>
        </ul>
      </nav>
      <CarouselMain />
    </header>
  );
}

export default Header;
