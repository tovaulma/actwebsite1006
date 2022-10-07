import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import "swiper/css";
import "swiper/css/effect-coverflow";
import Aggretsuko from '../assets/images/Aggretsuko.jpeg'
import Apple from '../assets/icons/apple.png'
import Android from '../assets/icons/android.png'
import Windows from '../assets/icons/windows.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from "gsap/all";
import { EffectCoverflow } from "swiper";

gsap.registerPlugin(ScrollTrigger)

const Games = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    const el = sliderRef.current;
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
    <div
    className="flex flex-col relative h-screen justify-evenly items-center"
    >
      <div className="relative" ref={titleRef}>
        <h3 className="uppercase tracking-[0.05rem] text-white font-semibold 
        text-4xl">Our Games</h3>
      </div>
      <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"1"}
      loop={true}
      loopFillGroupWithBlank={true}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 90,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
      breakpoints={{
        320:{
          slidesPerView: 1,
        },
        768:{
          slidesPerView: 3,
        },
        1536:{
          slidesPerView: 5,
        }
      }}
      className="mySwiper relative w-screen"
      ref={sliderRef}
      >
        <SwiperSlide className="bg-white rounded-md">
          <img src={Aggretsuko} className="w-[90%] rounded-lg m-[5%]"/>
          <h1 className="uppercase text-md font-semibold text-center p-2">ZOIDS WILD NFT ARENA</h1>
          <h2 className="text-sm text-center">Released on December 2022</h2>
          <div className="flex-row flex justify-center p-2 gap-4">
            <img src={Apple} className="h-[20px]"/>
            <img src={Android} className="h-[20px]"/>
            <img src={Windows} className="h-[20px]"/>
          </div>
          <p className="p-4 text-justify text-sm font-light">
            Irure aute tempor qui est ipsum et dolore duis veniam. Dolore aliqua commodo ea dolore aute occaecat elit eiusmod.
          </p>
          <div className="flex justify-end">
            <motion.button 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="uppercase text-sm m-4 p-1 border rounded-md border-[#252525] hover:bg-orange-300">
              Read More
            </motion.button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-md">
          <img src={Aggretsuko} className="w-[90%] rounded-lg m-[5%]"/>
          <h1 className="uppercase text-md font-semibold text-center p-2">Shakurel Planet</h1>
          <h2 className="text-sm text-center">Released on June 2022</h2>
          <div className="flex-row flex justify-center p-2 gap-4">
            <img src={Apple} className="h-[20px]"/>
            <img src={Android} className="h-[20px]"/>
          </div>
          <p className="p-4 text-justify text-sm font-light">
            Irure aute tempor qui est ipsum et dolore duis veniam. Dolore aliqua commodo ea dolore aute occaecat elit eiusmod.
          </p>
          <div className="flex justify-end">
            <motion.button 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="uppercase text-sm m-4 p-1 border rounded-md border-[#252525] hover:bg-orange-300">
              Read More
            </motion.button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-md">
          <img src={Aggretsuko} className="w-[90%] rounded-lg m-[5%]"/>
          <h1 className="uppercase text-md font-semibold text-center p-2">Bubble Bobble</h1>
          <h2 className="text-sm text-center">Released on November 2021</h2>
          <div className="flex-row flex justify-center p-2 gap-4">
            <img src={Apple} className="h-[20px]"/>
            <img src={Android} className="h-[20px]"/>
          </div>
          <p className="p-4 text-justify text-sm font-light">
            Irure aute tempor qui est ipsum et dolore duis veniam. Dolore aliqua commodo ea dolore aute occaecat elit eiusmod.
          </p>
          <div className="flex justify-end">
            <motion.button 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="uppercase text-sm m-4 p-1 border rounded-md border-[#252525] hover:bg-orange-300">
              Read More
            </motion.button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-md">
          <img src={Aggretsuko} className="w-[90%] rounded-lg m-[5%]"/>
          <h1 className="uppercase text-md font-semibold text-center p-2">Peko Pop: Match 3 Puzzle</h1>
          <h2 className="text-sm text-center">Released on December 2020</h2>
          <div className="flex-row flex justify-center p-2 gap-4">
            <img src={Apple} className="h-[20px]"/>
            <img src={Android} className="h-[20px]"/>
          </div>
          <p className="p-4 text-justify text-sm font-light">
            Irure aute tempor qui est ipsum et dolore duis veniam. Dolore aliqua commodo ea dolore aute occaecat elit eiusmod.
          </p>
          <div className="flex justify-end">
            <motion.button 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="uppercase text-sm m-4 p-1 border rounded-md border-[#252525] hover:bg-orange-300">
              Read More
            </motion.button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-md">
          <img src={Aggretsuko} className="w-[90%] rounded-lg m-[5%]"/>
          <h1 className="uppercase text-md font-semibold text-center p-2">Aggretsuko</h1>
          <h2 className="text-sm text-center">Released on July 2020</h2>
          <div className="flex-row flex justify-center p-2 gap-4">
            <img src={Apple} className="h-[20px]"/>
            <img src={Android} className="h-[20px]"/>
          </div>
          <p className="p-4 text-justify text-sm font-light">
            Irure aute tempor qui est ipsum et dolore duis veniam. Dolore aliqua commodo ea dolore aute occaecat elit eiusmod.
          </p>
          <div className="flex justify-end">
            <motion.button 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="uppercase text-sm m-4 p-1 border rounded-md border-[#252525] hover:bg-orange-300">
              Read More
            </motion.button>
          </div>
        </SwiperSlide>
      </Swiper>
      <HiOutlineArrowNarrowRight className="absolute bottom-24 text-gray-500 scale-150 animate-pulse md:hidden"/>
    </div>
  )
}

export default Games