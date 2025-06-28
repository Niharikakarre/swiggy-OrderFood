import React, { useContext, useState } from 'react'
import AccordionBody from './AccordionBody';
import { click } from '@testing-library/user-event/dist/click';


const RestaurantCaterogy = ({data,showItems,setShowIndex}) => {
      const [toggle,setToggle]=useState(false);
     const handleClick=()=>{
       setShowIndex();
      //  setShouldShow(!shouldShow);
      setToggle(!toggle);
       
     }
     
  return (
    <div>
        <div className='w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4  text-center'>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className='text-lg font-bold'>{data.title} ({data.itemCards.length})</span>
            
            <span className='font-bold text-3xl'>&#8681;</span>
        </div>
          <div className='flex'>
            {
            toggle&&showItems&& 
            <AccordionBody items={data.itemCards}/>
            } 
          </div>
           
        </div>
        
    </div>
  )
}

export default RestaurantCaterogy;