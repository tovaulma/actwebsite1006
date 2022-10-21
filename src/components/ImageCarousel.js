import Zoids from '../assets/images/Zoids.png'
import Peko from '../assets/images/Peko.png'
import Aggretsuko from '../assets/images/Aggretsuko.png'
import { useState, useRef, useEffect } from "react";

const ImageCarousel = () => {
  const imgRef = useRef(null)

  return (
    <div>
      <img ref={imgRef}/>
    </div>
  )
}

export default ImageCarousel