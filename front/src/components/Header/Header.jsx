import React, { useState } from "react";
import "./Header.css";
import Productos from "../../services/products.json";
import { useCart } from "../CartModal/CartGlobal";

// SubMenu remains unchanged
const SubMenu = ({ items, tipo }) => (
  <ul className='submenu1'>
    {items.map((item, index) => (
      <li key={index}>
        <a href={`#product-type${tipo}`}>Naves de {item}</a>
      </li>
    ))}
  </ul>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const tipoNaves = [...new Set(Productos.map((ship) => ship.tipoNave))];
  const { cartCount, toggleCart } = useCart(); // Usamos toggleCart

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav id='navbar'>
        <div className='nav-content'>
          <div className='hamburger' onClick={toggleMenu}>
            <i className='fas fa-bars'></i>
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a href='#home' onClick={toggleMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href='#productos' onClick={toggleMenu}>
                Productos
              </a>
            </li>
            <li>
              <a href='#informacion' onClick={toggleMenu}>
                Información
              </a>
            </li>
            <li>
              <a href='#acerca-de' onClick={toggleMenu}>
                Acerca de Nosotros
              </a>
            </li>
          </ul>

          <div className='input-container'>
            <input type='text' id='input' required />
            <label htmlFor='input' className='label'>
              Search
            </label>
            <div className='underline'></div>
            <button className='search-button'>
              <i className='fas fa-search'></i>
            </button>
          </div>

          {/* Carrito de compras con contador dinámico */}
          <div className='shopping-cart'>
            <button className='cart-container' onClick={toggleCart}> {/* Cambié onCartClick por toggleCart */}
              <i className='fas fa-shopping-cart'></i>
              <span className='cart-count'>{cartCount}</span>{" "}
              {/* contador dinámico */}
            </button>
          </div>
        </div>
      </nav>

      <section id='home' className='intro'>
        <h1>ShipShop</h1>
        <h2>“Viaja Más Allá con Nuestros Modelos de Naves Espaciales”</h2>
      </section>
    </>
  );
};

export default Header;
