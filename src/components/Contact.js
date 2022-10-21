import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import bg from '../assets/images/bg.png'
import { ScrollTrigger } from "gsap/all";
import Business from '../assets/icons/business.png'
import Recruiting from '../assets/icons/recruiting.png'
import Others from '../assets/icons/others.png'

gsap.registerPlugin(ScrollTrigger)


const Contact = () => {
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
            text-4xl text-center z-20">Get in Touch</h3>
        </div>
        <div className='w-screen z-10 flex flex-col md:flex-row'>
            <div className='flex md:w-[50%] justify-center'>
                <iframe className="w-[90%] h-[250px] md:w-[530px] md:h-[370px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.3522108978282!2d127.0526546853252!3d37.508712201063375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca41308f27ff3%3A0x7985149940cbea35!2s129-2%20Samseong-dong%2C%20Gangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1666236465984!5m2!1sen!2skr"></iframe> 
            </div>
            <div className='flex md:w-[50%] flex-col text-white text-lg justify-center'>
                <div className='m-6 flex flex-row md:ml-[15%]'>
                    <img src={Recruiting} className='w-[50px] h-[50px] mx-5'/>
                    <div className='flex flex-col'>
                        <h1 className='font-bold'>Recruiting</h1>
                        <h2><a href="mailto:recruit@actgames.co.kr">recruit@actgames.co.kr</a></h2>
                    </div>
                </div>
                <div className='m-6 flex flex-row md:ml-[15%]'>
                    <img src={Business} className='w-[50px] h-[50px] mx-5'/>
                    <div className='flex flex-col'>
                        <h1 className='font-bold'>Business</h1>
                        <h2><a href="mailto:business@actgames.co.kr">business@actgames.co.kr</a></h2>
                    </div>
                </div>
                <div className='m-6 flex flex-row md:ml-[15%]'>
                <img src={Others} className='w-[50px] h-[50px] mx-5'/>
                    <div className='flex flex-col'>
                        <h1 className='font-bold'>Others</h1>
                        <h2><a href="mailto:contact@actgames.co.kr">contact@actgames.co.kr</a></h2>
                    </div>
                </div>
            </div>
        </div> 
        <img src={bg} ref={bgRef} className="absolute w-[650px] right-0 bottom-0 z-0"/>
    </div>
  )
}

export default Contact