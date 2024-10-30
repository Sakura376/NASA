import React, { useState, useEffect } from "react";
import Slider from "./Slider"; // Tu componente slider
import products from '../../services/products.json'; // Importa el archivo JSON completo

function SliderScroll() {
  // Solo seleccionamos las primeras 6 imágenes del JSON
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
   
    const imagenesAleatorias = [...products].sort(() => Math.random() - 0.5); 
    setImagenes(imagenesAleatorias); // Guardamos las imágenes completas
  }, []);

  return (
    <div>
      <Slider imagenes={imagenes} /> {/* Pasamos los objetos completos */}
    </div>
  );
}

export default SliderScroll;
