import React from 'react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const BlogSnippet = () => {
    const triangleRef = useRef(null);
    useEffect(() => {
      const el = triangleRef.current;
      gsap.fromTo(el, 
      {
        y: 500,
        opacity: 0
      }, 
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: el
        }
      })
    }, [])
  return (
    <div className='h-screen'>
    </div>
  )
}

export default BlogSnippet