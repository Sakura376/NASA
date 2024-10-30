import React, { useState } from "react";
import "./PaymentForm.css"; // Asegúrate de crear este archivo para los estilos específicos

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
          <input className="i-payment"
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Número de tarjeta"
          />
          <input className="i-payment"
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="Fecha de vencimiento"
          />
          <input className="i-payment"
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="CVV"
          />
          <input className="i-payment"
            type="text"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            placeholder="Nombre del titular"
          />
          <button className="p-button" type="submit">Confirmar Pago</button>
        </form>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default PaymentForm;
