import React, { useState } from 'react';
import {LOGO_URL} from "../utils/constants"
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

import { useSelector } from 'react-redux';

const Header = () => {
  
   
  
    const [toggleSignIn,setToggleSignIn]=useState("Sign In");
    const handleSignInbtn=()=>{
       toggleSignIn==="Sign In"? setToggleSignIn("Sign Out"):setToggleSignIn("Sign In")
    }
    const onlineStatus=useOnlineStatus();
    //subsribing to store using selector
    const cartItems=useSelector((store)=>store.cart.items);
   
  return (
    <div className='flex  '>
       <div>
        <img className="w-44 m-2 h-40"src={LOGO_URL}alt="swiggyLogo"/>
       </div>
       <div className="  flex bg-gradient-to-b from-orange-400 w-full justify-between m-2 px-10 border-b-2 py-16">
       <Link to="/"className=' font-bold text-xl cursor-pointer mx-4 '>Home</Link> 
        <Link to="/about"className=' font-bold text-xl cursor-pointer mx-4 '>About Us</Link>
        

          <Link to="/cart"className=' font-bold text-xl cursor-pointer mx-4'>Cart({cartItems.length})</Link>
       
        <Link to="/grocery"className=' font-bold text-xl cursor-pointer mx-4'>Grocery</Link>
        <button className="font-bold text-lg bg-blue-500 text-white px-2 mx-4 rounded-lg " onClick={handleSignInbtn}>{toggleSignIn}</button>
         {//font-bold text-lg text-white px-2 mx-4 rounded-lg
          <div className={`'font-bold text-lg text-white px-2 mx-4 rounded-lg rounded-lg' ${onlineStatus?'bg-green-600':'bg-red-600'}`}>{onlineStatus?"Online":"Offline"}</div>
         }
         
        
        </div>


    </div>
  )
}

export default Header