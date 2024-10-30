import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importamos el componente Home
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/CartModal/CartGlobal'; // Importamos el CartProvider
import Login from './components/Login/login'
import Registro  from './components/Registro/registro';

function App() {
  return (
    <CartProvider> {/* Envuelve toda la aplicación con CartProvider */}
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
