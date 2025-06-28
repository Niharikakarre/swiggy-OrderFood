
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCaterogy from './RestaurantCaterogy';
import { useState } from 'react';
import { RES_IMG_URL } from '../utils/constants';



const RestaurantMenu = () => {
    
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    const [showIndex,setShowIndex]=useState(null);
   
  
    if(resInfo===null)return<Shimmer/>;
   
   
    const {name,cloudinaryImageId,avgRatingString,costForTwoMessage,city,areaName}=resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    // console.log(resInfo?.cards[2]?.card?.card?.info);
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
   
  
     
    
 
    
  return (
    
    <div className="menu text-center ">
       
        <div className='w-3/12 bg-gray-200 mx-auto rounded-lg  ' >
        <h1 className='font-bold text-xl my-1 '>{name}</h1>
        <div className='flex'>
         
          <img  className='w-40 rounded-lg p-2 h-50' src={RES_IMG_URL+cloudinaryImageId} alt="imgess"/> 
          <div className='text-center pl-5'>
            <p className='p-1 font-medium '>Area Name: {areaName}</p>
           <p className='p-1 font-medium '>Place: {city}</p>
           <p className='p-1 font-medium '>{costForTwoMessage}</p>
           <p className='p-1 font-medium '>Average Rating:{avgRatingString}</p>
           
           </div>
           
          
        </div>
        
        
        </div>
       
       {categories.map((categorie,index)=>(< RestaurantCaterogy key={categorie?.card?.card?.categoryId} 
       data={categorie?.card?.card}
        
        showItems={showIndex===index&&true} 
        setShowIndex={()=>setShowIndex(index)
          
        }
/>))}
    </div>
  )
}

export default RestaurantMenu