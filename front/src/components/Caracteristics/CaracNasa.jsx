import React from 'react';
import './Caracteristics.css';

const CaracNasa = () => {
  const caracteristicasNasa = [
    {
      titulo: "Durabilidad",
      descripcion: "Diseñadas para misiones largas y exigentes.",
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
        </svg>
      ),
    },
    // ... Agrega las mismas correcciones para los otros elementos
  ];

  return (
    <div className="caracteristicas-nasa">
      {caracteristicasNasa.map((caracteristica, index) => (
        <div className="tarjeta" key={index}>
          <div className="icono">{caracteristica.icono}</div>
          <h3 className='c-title'>{caracteristica.titulo}</h3>
          <p className='c-description'>{caracteristica.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default CaracNasa;
