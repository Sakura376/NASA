import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import { useCart } from '../CartModal/CartGlobal';
import ProductDetailsModal from './ProductDetailsModal';
import { API_URL } from "../../config";

const ProductCard = ({ id, title, imageProduct, price, caracteristics, rating }) => {
  const [selectedRating, setSelectedRating] = useState(rating || null);
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSelectedRating(rating); // Actualiza selectedRating cuando cambia rating
  }, [rating]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRatingChange = async (event) => {
    const ratingValue = parseInt(event.target.value);
    setSelectedRating(ratingValue);
    console.log(`Producto: ${id}, Calificación seleccionada: ${ratingValue}`);
    
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      console.error("Usuario no autenticado.");
      return;
    }

    if (ratingValue < 1 || ratingValue > 5) {
      console.error("Calificación inválida.");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/ratings/create`, 
        {
          product_id: id,
          user_id: userId,
          rating_value: ratingValue
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Calificación guardada:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error al guardar la calificación:", error.response.data);
      } else {
        console.error("Error al guardar la calificación:", error.message);
      }
    }
  };

  const product = { id, title, imageProduct, price, caracteristics };

  return (
    <>
      {isModalOpen && (
        <ProductDetailsModal
          product={product}
          onClose={closeModal}
          onAddToCart={addToCart}
        />
      )}

      <div className="product-card" onClick={openModal}>
        <img src={imageProduct} alt={title} />
        <div className="w-product">
          <button className="add-to-cart-p"
            onClick={(e) => {
              e.stopPropagation();
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
                checked={selectedRating === star}
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
