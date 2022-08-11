import React from 'react'
import { closeModal } from '../features/modal/ModalSlice';
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";


const Modal = () => {

  const dispatch = useDispatch()

  return (
    <div className="flex bg-opacity-50 justify-center items-center fixed top-0 left-0 w-[100%] h-[100%] z-10 bg-black">
      <div className="h-60 w-80 rounded-2xl p-10 bg-white">
        <div className="flex items-center justify-center mt-5">
          <h4 className="font-medium text-lg">
            Remove all items from Shopping Cart ?
          </h4>
        </div>

        <div className="flex items-center justify-between mt-5">
          <button
            className="bg-white w-[100px] h-10 border font-bold border-black rounded  hover:bg-black hover:text-white transition ease-out duration-500"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            className="bg-white w-[100px] h-10 border font-bold border-black rounded hover:bg-black hover:text-white transition ease-out duration-500"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal