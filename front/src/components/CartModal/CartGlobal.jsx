import React, { createContext, useState, useContext } from "react";
import CartModal from "./CartModal";


// Crear el contexto del carrito
const CartContext = createContext();

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};

// Proveedor del carrito, envolverá la aplicación
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const[notification, setNotification] = useState(null);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    // Mostrar notificación con el nombre del producto
    setNotification(`${product.title} ha sido añadido al carrito`);

    // Ocultar la notificación después de 3 segundos
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Función para abrir/cerrar el modal del carrito
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Contador de la cantidad total de productos en el carrito
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, toggleCart, cartCount }}
    >
      {children}
      {/* Renderizamos el modal del carrito si está abierto */}
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          onRemoveItem={removeFromCart}
          onClose={toggleCart}
        />
      )}

      {notification &&( 
      <div className='cart-notification'>{notification}
      </div>
      )}
    </CartContext.Provider>
  );
};
