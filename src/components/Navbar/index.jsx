import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categoryData from '../../data/category.data';
import SearchIcon from '../../assets/icons/SearchIcon';
import NavbarSearch from '../NavbarSearch';
import UserIcon from '../../assets/icons/UserIcon';
import AccountDropdown from '../AccountDropdown';
import CartIcon from '../../assets/icons/CartIcon';
import CartDropdown from '../CartDropdown';

const Navbar = () => {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const cancel = () => {
    setToggleSearchBar(false);
  };
  return (
    <div className='border-b-2'>
      <div className='container mx-auto flex items-center justify-between p-5'>
        <div>
          <Link to='/'>
            <img
              className='h-10'
              src='https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg'
            />
          </Link>
        </div>
        {toggleSearchBar ? (
          <NavbarSearch cancel={cancel} />
        ) : (
          <ul className='flex gap-4'>
            {categoryData.map((item, index) => (
              <li
                className='capitalize  rounded-3xl hover:bg-gray-100 px-5 py-2'
                key={index}
              >
                <Link to={`/shop?category=${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        )}
        <div className='flex items-center'>
          {!toggleSearchBar && (
            <button
              className='hover:bg-gray-100 rounded-full p-3'
              onClick={() => setToggleSearchBar(true)}
            >
              <SearchIcon />
            </button>
          )}
          <AccountDropdown />
          <CartDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
