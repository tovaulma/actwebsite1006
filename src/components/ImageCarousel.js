import Zoids from '../assets/images/Zoids.png'
import Peko from '../assets/images/Peko.png'
import Aggretsuko from '../assets/images/Aggretsuko.png'
import { useState } from 'react'

const ImageCarousel = () => {
  return (
    <div>
      <img src={Zoids} className='hidden'/>
      <img src={Peko}/>
    </div>
  )
}

export default ImageCarousel