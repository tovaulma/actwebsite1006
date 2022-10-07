import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from "gsap/all";
import bg from '../assets/images/bg.png'

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
  const bgRef = useRef(null)
  useEffect(() => {
    const el = bgRef.current;
    gsap.fromTo(el, 
    {
      x: 500,
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
    <div className='flex flex-col relative h-screen justify-evenly'>
      <div className="relative" ref={titleRef}>
        <h3 className="uppercase tracking-[0.05rem] text-white font-semibold 
        text-4xl text-center z-20">Recent Blog Posts</h3>
      </div> 
      <img src={bg} ref={bgRef} className="absolute w-[800px] right-0 bottom-0 z-0"/>
    </div>
  )
}

export default BlogSnippet