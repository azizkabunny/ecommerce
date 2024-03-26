import React, { useState } from 'react';
import CartIcon from '../../assets/icons/CartIcon';
import productsData from '../../data/products.data';
import ProductDropdownCart from '../cards/ProductDropdownCart';
import Button from '../Button';
import { useSelector } from 'react-redux';

const CartDropdown = () => {
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((state) => state.cart);
  const subTotal = cart
    .map((item) => item.qty * item.price)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  return (
    <div className='relative z-50'>
      <button
        onClick={() => setToggle(true)}
        className='hover:bg-gray-100 rounded-full p-3 relative'
      >
        <CartIcon />
        {cart.length > 0 && (
          <span className='absolute top-2 right-2 text-[8px] text-white rounded-full bg-blue-400 h-4 w-4 flex items-center justify-center'>
            {cart.length}
          </span>
        )}
      </button>
      <div
        onClick={() => setToggle(false)}
        className={`${!toggle && 'hidden'} fixed top-0 left-0 right-0 bottom-0`}
      ></div>

      <div
        className={`${!toggle && 'hidden'}
          bg-white shadow-lg rounded-xl border-2 w-[500px]
       absolute  top-[72px] right-0`}
      >
        <div className='p-5'>
          <h3 className='font-semibold text-xl mb-5 text-gray-700'>
            Shopping cart
          </h3>
          <div className='grid grid-cols-1 gap-5'>
            {cart.map((item) => (
              <div
                key={item.id}
                className='border-b-2 pb-5 last:border-b-0 border-b-gray-100'
              >
                <ProductDropdownCart item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className='bg-gray-100 p-5'>
          <div className='flex items-center justify-between '>
            <div>
              <h3 className='font-bold'>Subtotal</h3>
              <p className='text-gray-500 text-sm'>
                Shipping and taxes calculated at checkout.
              </p>
            </div>
            <div className='font-bold'>${subTotal}</div>
          </div>
          <div className='flex gap-2 mt-5'>
            <Button title='View cart' />
            <Button title='Checkout' style='bg-slate-900 text-white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
