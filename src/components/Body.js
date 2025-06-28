
import RestaurantCard,{WithVegLabel} from './RestaurantCard';
import { useState ,useEffect} from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [searchText,setSearchText]=useState("");
     const [resList,setResList]=useState([]);
     const [filterItems,SetFilterItems]=useState([]);
     const VegRestaurants=WithVegLabel(RestaurantCard);
  
     
    
const fecthData= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9692624&lng=79.59263039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
   const data2=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
   setResList(data2);
   SetFilterItems(data2);
  
}
useEffect(()=>{
    fecthData();
},[]);


const handleFilterBtn=()=>{
   
    const filteredItems=resList.filter((res)=>(res.info.avgRating>4.0));
    SetFilterItems(filteredItems);
}

const handleSearch=()=>{
   
   
    const filteredRestaurant = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
   SetFilterItems(filteredRestaurant);
}

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)return <h1>You are offline,plz check your internet connection</h1>
    // const {UserInfo,setUserName}=useContext(UserContext);
     if(resList.length===0)return <Shimmer/>
  
  return (
    <div className='m-4'>
        <div>
            <input  onChange={(e)=>{setSearchText(e.target.value)}}className="px-2 py-1 mx-6 rounded-md border-solid border-black border-2 focus:ring-2 focus:ring-black" type="text" placeholder='Search here' value={searchText}/>
        <button className="bg-teal-500 mx-4 text-white rounded-lg px-4 py-2 cursor-pointer "onClick={handleSearch}>Search</button>
         <button onClick={handleFilterBtn}className="bg-blue-500 text-white rounded-lg px-4 py-2 cursor-pointer ">Filter({">"}4Star)</button>
           {/* <input onChange={(e)=>setUserName(e.target.value)}className="px-2 py-1 mx-6 rounded-md border-solid border-black border-2" type="text" placeholder='Name' value={UserInfo} /> */}
         
       
        </div>
        <div className='flex flex-wrap '>
            {filterItems.map((resCard)=>(<Link key={resCard.info.id}  to={"/restaurant/"+resCard.info.id}>
            {resCard.info.veg===true?<VegRestaurants resData={resCard}/>: <RestaurantCard resData={resCard} />}
          
            </Link> ))}
          
        </div>
        
        
    </div>
  )
}

export default Body