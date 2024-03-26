import React from 'react';

const Button = ({ title, style = 'text-gray-700 bg-white', clbFunc }) => {
  return (
    <button
      onClick={clbFunc}
      className={`${style} w-full p-3 rounded-full text-lg border-2 hover:opacity-80`}
    >
      {title}
    </button>
  );
};

export default Button;
