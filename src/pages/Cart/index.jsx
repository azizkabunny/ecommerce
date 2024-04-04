import React from 'react';
import ProductCartCard from '../../components/cards/ProductCartCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className='py-10'>
      <h3 className='text-2xl font-semibold'>Shopping Cart</h3>

      <div className=' mt-10 border-t-2 py-12 border-t-gray-200 grid grid-cols-1  md:grid-cols-12'>
        <div className=' h-[500px] w-full col-span-8 border-r-2 border-r-gray-200 pr-10'>
          {cart.map((item) => (
            <ProductCartCard key={item.id} item={item} />
          ))}
        </div>
        <div className=' h-[500px] w-full col-span-4 px-10'>
          <h2 className='font-bold'>Order Summary</h2>
          <div className='flex mt-5 items-center justify-between border-b-2 border-b-gray-200 py-3 '>
            <p className='text-gray-600'>Subtotal</p>
            <p className='font-semibold'>$249.00</p>
          </div>
          <div className='flex items-center justify-between border-b-2 border-b-gray-200 py-3 '>
            <p className='text-gray-600'>Shipping estimate</p>
            <p className='font-semibold'>$5.00</p>
          </div>
          <div className='flex items-center justify-between border-b-2 border-b-gray-200 py-3 '>
            <p className='text-gray-600'>Tax estimate</p>
            <p className='font-semibold'>$24.90</p>
          </div>
          <div className='flex mb-5 items-center justify-between font-bold py-3 '>
            <p className=''>Order total</p>
            <p className='font-semibold'>$276.00</p>
          </div>
          <Link to='/checkout' className='flex-1'>
            <Button title='Checkout' style='bg-slate-900 text-white' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
