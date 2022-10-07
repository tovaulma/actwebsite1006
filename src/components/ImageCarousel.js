import Zoids from '../assets/images/Zoids.png'
import Peko from '../assets/images/Peko.png'
import Aggretsuko from '../assets/images/Aggretsuko.png'
import { useState, useEffect } from "react";

const ImageCarousel = () => {
  return (
    <div>
      <img src={Zoids} id="imageCar" className='hidden'/>
    </div>
  )
}

export default ImageCarousel