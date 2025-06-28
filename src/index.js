import React ,{lazy,Suspense, useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';

import Error from './components/Error';

  import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Body from './components/Body';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import Payment from './components/Payment';


const Grocery=lazy(()=>
  import("./components/Grocery")
);


const appRouter=createBrowserRouter([
  {path:"/",
    element:<App/>,
    children:[
      {path:"/",
    element:<Body/>},
      
      {  
        path:"/grocery",
        element:<Suspense fallback={<Shimmer/>}> <Grocery/></Suspense>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/payment",
        element:<Payment/>
      }
    ],
    errorElement:<Error/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
