import React from 'react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const BlogSnippet = () => {
  const titleRef = useRef(null)
  useEffect(() => {
    const el = titleRef.current;
    gsap.fromTo(el, 
    {
      x: -500,
      opacity: 0
    }, 
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: el
      }
    })
  }, [])
  return (
    <div className='flex flex-col relative h-screen justify-evenly items-center'>
      <div className="relative" ref={titleRef}>
        <h3 className="uppercase tracking-[0.05rem] text-white font-semibold 
        text-4xl">Recent Blog Posts</h3>
      </div>
    </div>
  )
}

export default BlogSnippet