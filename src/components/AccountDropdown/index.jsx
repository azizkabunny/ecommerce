import React, { useState } from 'react';
import UserIcon from '../../assets/icons/UserIcon';
import { Link } from 'react-router-dom';
import OrderIcon from '../../assets/icons/OrderIcon';
import HeartIcon from '../../assets/icons/HeartIcon';

const AccountDropdown = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='relative'>
      <button
        onClick={() => setToggle(true)}
        className='hover:bg-gray-100 rounded-full p-3'
      >
        <UserIcon />
      </button>
      <div
        onClick={() => setToggle(false)}
        className={`${!toggle && 'hidden'} fixed top-0 left-0 right-0 bottom-0`}
      ></div>

      {toggle && (
        <div className='bg-white rounded-3xl border-2 p-5 overflow-hidden w-[270px] absolute top=[60px] right-0'>
          <div className='flex items-center mb-5'>
            <div className='h-12 w-12 rounded-full overflow-hidden'>
              <img src='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImage-8.a9a0d423.png&w=128&q=75' />
            </div>
            <div className='ml-3'>
              <h3 className='text-sm font-bold'>Eden Smith</h3>
              <p className='text-xs '>Los Angeles, CA</p>
            </div>
          </div>
          <hr />

          <div className='my-5' onClick={() => setToggle(false)}>
            <Link
              to='/user/account'
              className='flex items-center hover:bg-gray-100 p-2 rounded-lg'
            >
              <UserIcon color='text-gray-500' />
              <span className='ml-3'>My account</span>
            </Link>
            <Link
              to='/user/account'
              className='flex items-center hover:bg-gray-100 p-2 rounded-lg'
            >
              <OrderIcon color='text-gray-500' />
              <span className='ml-3'>My order</span>
            </Link>
            <Link
              to='/user/wishlist'
              className='flex items-center hover:bg-gray-100 p-2 rounded-lg'
            >
              <HeartIcon color='text-gray-500' />
              <span className='ml-3'>Wishlist</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
