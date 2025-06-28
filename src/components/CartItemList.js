import React from 'react'


import { RES_IMG_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeItem } from '../utils/cartSlice';

const CartItemList = ({items}) => {
    const dispatch=useDispatch();
    const RemoveFromCart=(id)=>{
            dispatch(removeItem(id));
    }
    
  
  return (
    <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className='m-2 p-2 border-b-2 border-gray-300 text-left flex justify-between'>
                   
                       
                    <div className='w-9/12'>
                        <div>
                    <span className='py-2'> {item?.card?.info?.name}</span>
                     <span> -₹ {item?.card?.info?.price/100}</span>
                     </div>
                   
                    <p className='text-xs'>{item?.card?.info?.description}</p>
                     </div>
                     <div className='w-3/12'>
                      <button className=' absolute p-2 mb-1 rounded-lg bg-red-600 text-white' onClick={()=>RemoveFromCart(item.card.info.id)}>Remove</button>
                      <img alt="cart-img"className=" rounded-lg"src={RES_IMG_URL+item.card.info.imageId}/>
                    
                      </div>               
                    </div>))}
        </div>
  )
}

export default CartItemList