import React from 'react'
import CartHeader from './components/CartHeader';
import Navbar from './components/Navbar';
import Cart from './components/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import Modal from './components/Modal';

function App() {
   
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  

  useEffect(()=> {
    dispatch(getCartItems('random'))
  }, [])

  useEffect(()=> {
    dispatch((calculateTotals()));
  }, [cartItems]);

  
  if (isLoading) {
    return(
      <div>
        <h1 className='text-4xl font-bold'>Loading...</h1>
      </div>
    )
  }


  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartHeader />
      <Cart />
    </div>
  );
}

export default App;
