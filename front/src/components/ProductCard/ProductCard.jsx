import React, { useState } from "react";
import "./Products.css";
import { useCart } from '../CartModal/CartGlobal';  // Importar el hook del carrito
import ProductDetailsModal from './ProductDetailsModal';  // Importamos el nuevo modal

const ProductCard = ({ id, title, imageProduct, price, caracteristics }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);  // Estado para el modal

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
    console.log(`Producto: ${id}, Rating seleccionado: ${event.target.value}`);
  };



  const product = { id, title, imageProduct, price, caracteristics }; // Datos del producto para el modal

  return (
    <>
      {/* Mostrar el modal solo si isModalOpen es true */}
      {isModalOpen && (
        <ProductDetailsModal
          product={product}
          onClose={closeModal}
          onAddToCart={addToCart}
        />
      )}

      <div className="product-card" onClick={openModal}> {/* Abrir el modal al hacer clic en la tarjeta */}
        <img src={imageProduct} alt={title} />
        <div className="w-product">
          <button className="add-to-cart-p"
            onClick={(e) => {
              e.stopPropagation(); // Evitar que el clic en el botón abra el modal
              addToCart({ id, title, price, imageProduct });
            }}
          >
            Añadir al carrito
          </button>
        </div>
        <h2>{title}</h2>
        <p><strong>Precio:</strong> {parseFloat(price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        {/* Renderización de estrellas */}
        <div className="rating">
          {[5, 4, 3, 2, 1].map((star) => (
            <React.Fragment key={star}>
              <input
                value={star}
                name={`rate-${id}`}
                id={`star${star}-${id}`}
                type="radio"
                onChange={handleRatingChange}
                checked={selectedRating === `${star}`}
              />
              <label title={`${star} estrellas`} htmlFor={`star${star}-${id}`}></label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
