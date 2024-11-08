import React, { useState } from "react";
import "./PaymentForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faCalendarAlt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const PaymentForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    onClose(); // Cierra el modal después de enviar el formulario
  };

  return (
    <div className='payment-form-overlay' onClick={(e) => {
      if (e.target.className === "payment-form-overlay") {
        onClose();
      }
    }}>
      <div className='payment-form'>
        <form className='f-payment' onSubmit={handleSubmit}>
          
          <div className="input-payment">
            <FontAwesomeIcon icon={faCreditCard} className="input-icon" />
            <input className="i-payment"
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Número de tarjeta"
            />
          </div>

          <div className="input-payment">
            <FontAwesomeIcon icon={faCalendarAlt} className="input-icon" />
            <input className="i-payment"
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="Fecha de vencimiento"
            />
          </div>

          <div className="input-payment">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input className="i-payment"
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="CVV"
            />
          </div>

          <div className="input-payment">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input className="i-payment"
              type="text"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              placeholder="Nombre del titular"
            />
          </div>

          <button className="p-button" type="submit">Confirmar Pago</button>
        </form>
        <button className="close-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default PaymentForm;
