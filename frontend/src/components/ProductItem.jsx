import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className='text-gray-700 cursor-pointer'>
      {/* Product Image */}
      <Link to={`/product/${id}`}>
        <div className='overflow-hidden'>
          <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </Link>

      {/* Buttons (Add to Cart and Buy Now) */}
      <div className='flex justify-between mt-4'>
        {/* Add to Cart Button */}
        {/* <button className='bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800'>
          Add to Cart
        </button> */}

        {/* Buy Now Button */}
        <Link to={`/product/${id}`} className='bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-500'>
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
