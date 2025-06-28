
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import UserContext from './utils/UserContext';
import {useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/AppStore';


function App() {
     
  const [userName,setUserName]=useState();
  useEffect(()=>{
   const data={name:"vamshi"}
   setUserName(data.name);
  },[]);




  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="App">
         <Header/> 
         <Outlet/>
         
    </div>
    </UserContext.Provider>
    </Provider>
    
  );
}
//
export default App;
