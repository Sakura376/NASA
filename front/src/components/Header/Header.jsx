import React, { useState, useEffect } from "react";
import "./Header.css";
import Productos from "../../services/products.json";
import { useCart } from "../CartModal/CartGlobal";
import Login from "../Login/login";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const tipoNaves = [...new Set(Productos.map((ship) => ship.tipoNave))];
  const { cartCount, toggleCart } = useCart();
  const [activeModal, setActiveModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setIsAuthenticated(true);
      setUserName(storedUserName);
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleModal = () => {
    setActiveModal(!activeModal);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setIsAuthenticated(false);
    setUserName("");
  };

  const handleLoginSuccess = (username) => {
    setIsAuthenticated(true);
    setUserName(username);
    setActiveModal(false);
  };

  return (
    <>
      <nav id="navbar">
        <div className="nav-content">
          <div className="hamburger" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={toggleMenu}>Inicio</a></li>
            <li><a href="#productos" onClick={toggleMenu}>Productos</a></li>
            <li><a href="#informacion" onClick={toggleMenu}>Información</a></li>
            <li><a href="#acerca-de" onClick={toggleMenu}>Acerca de Nosotros</a></li>
          </ul>

          <div className="input-container">
            <input type="text" id="input" required />
            <label htmlFor="input" className="search">Search</label>
            <div className="underline"></div>
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="shopping-cart">
            <button className="cart-container" onClick={toggleCart}>
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">{cartCount}</span>
            </button>

            {isAuthenticated ? (
              <div className="user-menu">
                <button className="log-button">
                  <i className="fas fa-user"></i>
                  <span className="log-cta">{userName}</span>
                </button>
                <div className="submenu">
                  <button className="logout-button" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </div>
              </div>
            ) : (
              <button className="log-button" onClick={handleModal}>
                <i className="fas fa-user"></i>
                <span className="log-cta">Iniciar Sesión</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      <section id="home" className="intro">
        <h1>ShipShop</h1>
        <h2>“Viaja Más Allá con Nuestros Modelos de Naves Espaciales”</h2>
      </section>

      {activeModal && (
        <Login closeModal={handleModal} statusModal={activeModal} onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default Header;
