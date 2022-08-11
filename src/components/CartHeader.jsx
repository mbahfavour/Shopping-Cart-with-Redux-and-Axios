import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';


const CartHeader = () => {

    const { amount } = useSelector((state) => state.cart)

  return (
    <div>
      <div className="flex justify-between px-20 md:px-40 mt-10">
        <h3 className="text-xl font-semibold">MY CART</h3>
        <div className="flex">
          <AiOutlineShoppingCart size={26} />
          <div className='bg-black rounded-full h-6 w-6 text-center mt-[-10px] ml-[-10px]'>
            <h4 className='mb-3 text-white'>{amount}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartHeader