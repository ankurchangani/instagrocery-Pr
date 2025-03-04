import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import all product images
import product1 from '../../assets/images/Product-1-img/product-1.jpeg';
import product2 from '../../assets/images/Product-1-img/product-2.jpeg';
import product3 from '../../assets/images/Product-1-img/product-3.jpeg';
import product4 from '../../assets/images/Product-1-img/product-4.jpeg';
import product5 from '../../assets/images/Product-1-img/product-5.jpeg';
import product6 from '../../assets/images/Product-1-img/product-6.jpeg';
import product7 from '../../assets/images/Product-1-img/product-7.jpeg';
import product8 from '../../assets/images/Product-1-img/product-8.jpeg';
import product9 from '../../assets/images/Product-1-img/product-9.jpeg';
import product10 from '../../assets/images/Product-1-img/product-10.jpeg';
import product11 from '../../assets/images/Product-1-img/product-11.jpeg';
import product12 from '../../assets/images/Product-1-img/product-12.jpeg';
import product13 from '../../assets/images/Product-1-img/product-13.jpeg';
import product14 from '../../assets/images/Product-1-img/product-14.jpeg';
import product15 from '../../assets/images/Product-1-img/product-15.png';
import product16 from '../../assets/images/Product-1-img/product-16.png';
import product17 from '../../assets/images/Product-1-img/product-17.png';
import product18 from '../../assets/images/Product-1-img/product-18.png';
import product19 from '../../assets/images/Product-1-img/product-19.png';
import product20 from '../../assets/images/Product-1-img/product-20.png';

const productImages = [
  product1, product2, product3, product4, product5, product6, product7, product8, product9, product10,
  product11, product12, product13, product14, product15, product16, product17, product18, product19, product20
];

const ProductDetailsImg = () => {
  const navigate = useNavigate();

  return (
    <section className='py-8'>
      <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4'>
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className='object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform'
            onClick={() => navigate(`/category/${index + 1}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductDetailsImg;
