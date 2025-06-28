import { useState ,useEffect} from "react";



const useBodyFetch=()=>{
    const [resData,setResData]=useState(null);
    const fecthData= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9692624&lng=79.59263039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
   const data2=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResData(data2);

  
}
    useEffect(()=>{fecthData()},[]);
       return resData;
}



export  default useBodyFetch;