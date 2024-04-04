import React from 'react';
import {
  decCartProduct,
  incCartProduct,
  removeFromCart,
} from '../../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import MinusIcon from '../../../assets/icons/MinusIcon';
import PlusIcon from '../../../assets/icons/PlusIcon';

const ProductCartCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className='flex border-b-2 pb-5 last:border-b-0 border-b-gray-100'>
      <div className='bg-gray-100 rounded-xl w-[100px] h-full flex items-center py-10 justify-center'>
        <img src={item.image} className='h-[50px] w-[50px]' />
      </div>
      <div className='flex-1 px-2 flex flex-col justify-between'>
        <div>
          <h3 className='font-bold text-sm'>{item.title}</h3>
          <p>{item.category}</p>
        </div>
        <div className='flex gap-4 items-center mt-5'>
          <button
            disabled={item.qty <= 1}
            onClick={() => {
              dispatch(decCartProduct({ id: item.id }));
            }}
            className='h-8 w-8 flex items-center justify-center rounded-full border-2 border-gray-200 '
          >
            <MinusIcon size='h-4 w-4' />
          </button>
          <span>{item.qty}</span>
          <button
            onClick={() => {
              dispatch(incCartProduct({ id: item.id }));
            }}
            className='h-8 w-8 flex items-center justify-center rounded-full border-2 border-gray-200 '
          >
            <PlusIcon size='h-4 w-4' />
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div className='text-green-500 text-sm font-semibold border-2 border-green-500 rounded-lg py-1 px-2'>
          ${item.price}
        </div>
        <button
          onClick={() => {
            dispatch(removeFromCart({ id: item.id }));
          }}
          className='text-blue-500 font-semibold'
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCartCard;
