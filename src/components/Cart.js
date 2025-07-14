import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice';
import CartItemList from './CartItemList';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
     const cartItems=useSelector((store)=>store.cart.items);
     const ClearThecart=()=>{
      dispatch(clearCart());
        
   }
   const handlePayment=()=>{
    navigate("/payment");
   }
  return (
    <div className='w-6/12 m-auto text-center'>
      <h2 className='font-bold text-xl text-center m-2'>Cart</h2>
      <button onClick={ClearThecart} className='text-white  p-2 m-2 rounded-lg justify-center bg-red-600'>Clear Cart</button>
      {cartItems.length!==0&&<button onClick={handlePayment} className='text-white  p-2 m-2 rounded-lg justify-center bg-green-600'>Proceed Payment</button>} 
       
      {cartItems.length===0&&<h1>Please Add Something to Cart</h1>}
     {<CartItemList items={cartItems}/>}





    </div>
  )



}

export default Cart