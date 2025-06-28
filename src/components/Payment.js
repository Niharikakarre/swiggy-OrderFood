import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Payment= () => {
  
  const cartItems=useSelector((store)=>store.cart.items);
  const [amount,setAmount]=useState(0);

  const handlePayment = () => {
    console.log("Payment initiated");
    // You can redirect to Razorpay, Stripe, or another service here
  };
 const sum=()=>{
    var tempSum=0;
    for(let i=0;i<cartItems.length;i++)
    { 
        tempSum+=cartItems[i]?.card?.info?.price/100;
    }
    setAmount(tempSum);
 }
 useEffect(()=>{sum()});
  
  return (
     
    <div className="min-h-screen bg-gray-100 pb-24 w-1/2 mx-auto left-0 right-0 ">
      {/* Header */}
      <div className="bg-white shadow p-4 sticky top-0 z-10">
        <h1 className="text-xl font-bold">Confirm and Pay</h1>
      </div>

      {/* Delivery Address */}
      <div className="bg-white p-4 mt-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Deliver to</h2>
        <textarea className="w-full h-20 border border-black " type="text-area"/>
        <p className="text-gray-700"> Ex:Vamshi Krishna, NIT Warangal Campus, Telangana - 506004</p>
      </div>

      {/* Payment Method */}
      <div className="bg-white p-4 mt-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" defaultChecked />
            <span>UPI</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" />
            <span>Credit / Debit Card</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" />
            <span>Cash on Delivery</span>
          </label>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-4 mt-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        <div className="flex justify-between text-gray-700 mb-1">
          <span>Item Total</span>
          <span>₹{amount}</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-1">
          <span>Delivery Fee</span>
          <span>₹50</span>
        </div>
        <div className="flex justify-between font-bold text-black border-t pt-2 mt-2">
          <span>Total</span>
          <span>₹{amount+50}</span>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t px-4 py-3 flex justify-between items-center z-20">
        <div className="text-lg font-bold">₹{amount}</div>
        <button
          onClick={handlePayment}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;