import React from 'react';

const ProductDropdownCart = ({ item }) => {
  return (
    <div className='flex'>
      <div className='bg-gray-100 rounded-xl w-[100px] h-full flex items-center py-10 justify-center'>
        <img src={item.image} className='h-[50px] w-[50px]' />
      </div>
      <div className='flex-1 px-2 flex flex-col justify-between'>
        <div>
          <h3 className='font-bold text-sm'>{item.title}</h3>
          <p>{item.category}</p>
        </div>
        <div>Qty {item.qty}</div>
      </div>
      <div className='flex flex-col justify-between'>
        <div className='text-green-500 text-sm font-semibold border-2 border-green-500 rounded-lg py-1 px-2'>
          ${item.price}
        </div>
        <button className='text-blue-500 font-semibold'>Remove</button>
      </div>
    </div>
  );
};

export default ProductDropdownCart;
