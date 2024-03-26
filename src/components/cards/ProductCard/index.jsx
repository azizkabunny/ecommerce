import React, { useState } from 'react';
import HeartIcon from '../../../assets/icons/HeartIcon';
import StarIcon from '../../../assets/icons/StarIcon';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BagIcon from '../../../assets/icons/BagIcon';
import QuickViewIcon from '../../../assets/icons/QuickViewIcon';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../../redux/slices/wishlistSlice';

import { addToCart } from '../../../redux/slices/cartSlice';
import { removeFromCart } from '../../../redux/slices/cartSlice';

const ProductCard = ({ item }) => {
  const isInWishlist = useSelector((state) =>
    state.wishlist.find((p) => p.id === item.id)
  );
  const isInCart = useSelector((state) =>
    state.cart.find((p) => p.id === item.id)
  );

  const wishlist = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = ['purple', 'yellow', 'red', 'blue', 'green'];

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist({ id: item.id }));
    } else {
      dispatch(
        addToWishlist({
          item: item,
        })
      );
    }
  };

  const addProductToCart = () => {
    dispatch(
      addToCart({
        item: { ...item, qty: 1 },
      })
    );
  };
  return (
    <div>
      <div className='bg-gray-100 group p-5 flex flex-col rounded-3xl overflow-hidden '>
        <div className='flex items-center justify-between'>
          <div className='flex bg-white items-center py-1 px-3 rounded-full text-sm text-gray-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              aria-hidden='true'
              class='w-3.5 h-3.5'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'
              ></path>
            </svg>
            <span className='ml-2'>{item.category}</span>
          </div>
          <button
            onClick={toggleWishlist}
            className='bg-white p-1 rounded-full'
          >
            <HeartIcon
              color={`${
                isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-500'
              }`}
            />
          </button>
        </div>
        <Link
          to={`/products/${item.id}`}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
          className='h-[180px] p-5 flex justify-between bg-center  bg-contain bg-no-repeat bg-origin-content'
        ></Link>
        <div className='h-[15px]'>
          <div className='flex gap-3  mb-[-60px] opacity-0 group-hover:mb-0 group-hover:mt-[-10px] group-hover:opacity-100 transition-all delay-100'>
            <button
              onClick={addProductToCart}
              disabled={isInCart && true}
              className={`${
                isInCart
                  ? 'bg-green-600 hover:bg-green-500'
                  : 'bg-slate-800 hover:bg-slate-700'
              }
                flex items-center flex-1 py-2 px-3 gap-2 text-sm text-white rounded-full`}
            >
              <BagIcon color='text-white' size={'h-3.5 w-3.5'} />
              {isInCart ? 'Added to cart' : 'Add to cart'}
            </button>
            <button className='flex-1 flex items-center py-2 px-3 gap-2 text-sm text-slate-800 rounded-full shadow-lg hover:bg-gray-100 bg-white'>
              <QuickViewIcon color='text-slate-800' size={'h-3.5 w-3.5'} />
              Quick view
            </button>
          </div>
        </div>
      </div>
      <Link to={`/products/${item.id}`} className='p-2 block'>
        <ul className='flex gap-1 my-3'>
          {colors.map((item) => (
            <li
              style={{
                borderColor: item,
              }}
              className=' hover:border-[2px] w-[38px] rounded-full h-[38px] flex justify-center items-center '
            >
              <button
                style={{
                  backgroundColor: item,
                }}
                className=' h-[30px] w-[30px] rounded-full opacity-70'
              ></button>
            </li>
          ))}
        </ul>
        <h3 className='font-semibold text-lg mb-3 line-clamp-2 h-[55px]'>
          {item.title}
        </h3>
        <div className='flex items-center justify-between'>
          <div className='text-green-500 border-2 border-green-500 font-bold py-1 px-3 rounded-lg'>
            ${item.price}
          </div>
          <div className='flex items-center'>
            {
              <StarIcon
                color='fill-yellow-500 text-yellow-500'
                size='h-5 w-5'
              />
            }
            <span className='ml-1'>4.9 (98 reviews)</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
