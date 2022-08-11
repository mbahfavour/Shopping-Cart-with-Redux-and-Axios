import React from 'react'
import CartItem from './CartItem';
import { useDispatch ,useSelector } from 'react-redux';
import { openModal } from '../features/modal/ModalSlice';


const Cart = ({ cartitems }) => {
  
  const { cartItems, amount, totalCost } = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  
  if (amount < 1) {
    return (
      <div className='flex justify-center items-center mt-40'>
        <h4 className='font-bold'>Your bag is currently empty.</h4>
      </div>
    )
  }


  return (
    <div>
      <div>
        <div className="mx-5 md:mx-40 mt-5">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <hr className="mt-5" />
        <div className="px-20 md:pl-60 mt-3">
          <h4 className="font-bold text-lg">
            Total:
            <span className="ml-[70%] md:ml-[60%] font-bold">
              ${totalCost.toFixed(2)}
            </span>
          </h4>
        </div>
        <div className="flex mx-20 md:mx-40 mt-10 justify-evenly">
          <button
            onClick={() => {
              dispatch(openModal());
            }}
            className="bg-white w-[100px] h-10 border font-bold border-black rounded  hover:bg-black hover:text-white transition ease-out duration-500"
          >
            Clear All
          </button>
          <button className="bg-black text-white w-[100px] h-10 border font-bold border-black rounded  hover:bg-white hover:text-black transition ease-out duration-500">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart