import React from 'react'

import UserClass from './UserClass';
import UserContext from '../utils/UserContext';


class About extends React.Component{
  
  render(){
   
   return (
    <div>
      <div>
        {/* <UserContext.Consumer>
          {({loggedInUser})=><h2>{loggedInUser}</h2>}
        </UserContext.Consumer> */}
      </div>
      <UserClass />
    </div>
  )
  }



}






export default About;