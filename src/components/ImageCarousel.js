import Zoids from '../assets/images/Zoids.png'
import Peko from '../assets/images/Peko.png'
import Aggretsuko from '../assets/images/Aggretsuko.png'
import { useState, useRef, useEffect } from "react";

const images = [Zoids, Peko, Aggretsuko]

let counter = 1

const ImageCarousel = () => {

  const imgRef = useRef(null)

  function changeSrc () {
    imgRef.current.className = "z-20 w-[300px] ease-in"
    imgRef.current.src = images[counter]
    counter++
    if(counter>2){
      counter = 0
    }
    console.log(counter)
  }

  setInterval(changeSrc, 3000)

  return (
    <div>
      <img ref={imgRef} src={images[0]} className="z-20 w-[300px] ease-in"/>
    </div>
  )
}

export default ImageCarousel
