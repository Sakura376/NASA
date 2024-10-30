import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import productsData from '../../services/products.json';
import CaracNasa from '../Caracteristics/CaracNasa';
import CaracSpaceX from '../Caracteristics/CaracSpaceX';

const Products = () => {
  const [spaceXProducts, setSpaceXProducts] = useState([]);
  const [nasaProducts, setNasaProducts] = useState([]);

  useEffect(() => {
    // Filtramos los productos en el useEffect solo una vez al cargar
    const spaceX = productsData.filter(product => product.tipoNave === 'SpaceX');
    const nasa = productsData.filter(product => product.tipoNave === 'NASA');
    setSpaceXProducts(spaceX);
    setNasaProducts(nasa);

    console.log("Productos cargados: ", productsData); // Verifica que los productos están cargados
  }, []); // Dependencias vacías para ejecutarlo solo una vez

  return (
    <section id='productos' className='products'>
      <h2 id='product-type' className='products-title'>Naves de SpaceX</h2>
      <Carousel products={spaceXProducts} />
      <CaracNasa/>

      <h2 id='product-type' className='products-title'>Naves de NASA</h2>
      <Carousel products={nasaProducts} />
      <CaracSpaceX/>
    </section>
  );
};

export default Products;
