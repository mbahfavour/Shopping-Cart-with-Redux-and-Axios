import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { removeItem, increaseQty, decreaseQty } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()
  
  return (
    <div className="flex mt-5 h-[50px]">
      <div className="h-[50px] w-[50px]">
        <img src={img} alt={title} />
      </div>
      <div className="mt-4 ml-3 w-[50%]">
        <h4 className="text-sm font-bold">{title}</h4>
      </div>
      <div className="flex ml-20 justify-center w-[20%]">
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decreaseQty({ id }));
          }}
          className="text-2xl"
        >
          -
        </button>
        <h4 className="text-xl mt-3 ml-3 mr-3">{amount}</h4>
        <button
          onClick={() => {
            dispatch(increaseQty({ id }));
          }}
          className="text-2xl"
        >
          +
        </button>
      </div>
      <div className="mt-3 ml-5 w-[25%]">
        <h4 className="font-medium">${price}</h4>
      </div>
      <div className="ml-7 flex justify-center w-[5%]">
        <button
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          <AiOutlineClose size={18} />
        </button>
      </div>
    </div>
  );
}

export default CartItem