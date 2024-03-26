import React, { useEffect, useRef } from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';
import CloseIcon from '../../assets/icons/CloseIcon';
import { useNavigate } from 'react-router-dom';

const NavbarSearch = ({ cancel }) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        submit(event);
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  const submit = () => {
    navigate(`/shop?search=${ref.current.value}`);
  };

  return (
    <div className=' bg-gray-100 py-2 px-5 w-1/2 flex items-center rounded'>
      <SearchIcon />
      <input
        ref={ref}
        className='w-full p-2 text-lg outline-none border-0 bg-transparent mx-3'
      />
      <button
        onClick={() => {
          cancel();
          navigate('/shop');
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default NavbarSearch;
