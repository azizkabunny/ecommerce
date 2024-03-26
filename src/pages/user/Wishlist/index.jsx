import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../../components/cards/ProductCard';
const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <div className='grid grid-cols-4 gap-7 my-10'>
      {wishlist.length ? (
        wishlist.map((item) => <ProductCard item={item} />)
      ) : (
        <div className='text-center col-span-4'>No selected products</div>
      )}
    </div>
  );
};

export default Wishlist;
