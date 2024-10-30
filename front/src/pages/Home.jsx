import React from 'react';
import Products from '../components/ProductCard/Products';
import SliderController from '../components/Slider/SliderController';


const Home = () => {
  return (
    <div>
      <main>
        <Products />
        <SliderController />
      </main>
    </div>
  );
};

export default Home;
