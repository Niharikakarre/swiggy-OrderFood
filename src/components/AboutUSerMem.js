import { useState } from "react";

const AboutUserMem=()=>{

   const [count ,setCount]=useState(0);
   
    return (
        <div className="text-center bg-gray-200 p-6 m-4 w-fit rounded-lg ">
            <h1 className="font-bold text-xl">About</h1>
            <h2 className=" font-bold text-lg">Count: {count}</h2>
            
            <h2 className="text-lg">name: Vamshi</h2>
            <h3 className="text-lg">from veldhi</h3>
            <h3 className=" text-lg">liked this concept</h3>
            <h2 className=" text-lg">Gmail:xxxxxxxxxxxxx</h2>
            <h3 className=" text-lg">NIT Warangal</h3>
           <button className="bg-green-500 text-white px-2 py-1 m-2 rounded-lg" onClick={()=>{setCount(count+1)}}> Count+</button>


        </div>
    )
}
export default AboutUserMem;