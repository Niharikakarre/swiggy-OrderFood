import React from 'react'
import { COMING_SOON_IMG } from '../utils/constants'

const Grocery = () => {
  return (
    <div className=' flex justify-center mt-10 '>
      <img className="rounded-lg"src={COMING_SOON_IMG} alt="comingSoon-img"/>
    </div>
  )
}

export default Grocery