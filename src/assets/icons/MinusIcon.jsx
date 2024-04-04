import React from 'react';

const MinusIcon = ({ size = 'w-6 h-6', color = 'text-black' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={`${size} ${color}`}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
    </svg>
  );
};

export default MinusIcon;
