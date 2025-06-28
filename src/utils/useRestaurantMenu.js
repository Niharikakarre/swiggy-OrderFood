import { useEffect, useState } from "react";
import { RES_ITEM_URL_LAST, RES_ITEMS_URL } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
      const fetchMenu=async()=>{ 
             const data=await fetch(RES_ITEMS_URL+resId+RES_ITEM_URL_LAST);
             const json=await data.json();
             setResInfo(json.data);
        }
    useEffect(()=>{
        fetchMenu();
     },[]);
    
   
    return resInfo;
}
export default useRestaurantMenu;