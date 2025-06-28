import React from "react";
class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            userInfo:{
                name:"Default",
                login:"Default"
            }

        }
 
    }
    async componentDidMount(){
       const data=await fetch(" https://api.github.com/users/Vamshi220325");
       const json=await data.json();
      
       this.setState({
        userInfo:json
       })

   }
   
   render(){
    
    const {name,login,avatar_url}=this.state.userInfo;
   
    return ( 
        <div className="flex justify-center">
    <div className="text-center bg-gray-200 p-6 m-4 w-fit rounded-lg ">
            <h1 className="font-bold text-xl">About</h1>
              
                <img className="w-36 ml-3"src={avatar_url} alt="contactPic" />
            <h2 className="text-lg">Name: {name}</h2>
            <h3 className="text-lg">{login}</h3>
            <h3 className=" text-lg">Phone Num:xxxxxxxxx</h3>
            <h2 className=" text-lg">Gmail:xxxxxxxxxxxxx</h2>
            <h3 className=" text-lg">NIT Warangal</h3>
       </div>
       </div>)
   }
}
export default UserClass;