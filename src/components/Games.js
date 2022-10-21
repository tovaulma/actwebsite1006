import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import "swiper/css";
import "swiper/css/effect-coverflow";
import Aggretsuko from '../assets/images/agg2.jpg'
import Zoids from '../assets/images/zoids_c_art.jpg'
import Peko from '../assets/images/peko.jpg'
import Mogmog from '../assets/images/mogmog.png'
import Bubs from '../assets/images/bubs2.png'
import Apple from '../assets/icons/apple.png'
import Android from '../assets/icons/android.png'
import Windows from '../assets/icons/windows.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from "gsap/all";
import { EffectCoverflow } from "swiper";
import { useTranslation } from 'react-i18next'
import { t } from "i18next";

gsap.registerPlugin(ScrollTrigger)

const Games = () => {
  const { t, i18n } = useTranslation()
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

  const iconRef = useRef(null)
  useEffect(() => {
    const el = iconRef.current;
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
      autoHeight={true}
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
      className="mySwiper relative w-[90%] md:w-[100%]"
      ref={sliderRef}
      >
        <SwiperSlide className="bg-white rounded-md">
          <img src={Zoids} className="w-[90%] h-[200px] rounded-lg m-[5%] object-cover"/>
          <h1 className="uppercase text-md font-semibold text-center p-2">ZOIDS WILD NFT ARENA</h1>
          <h2 className="text-sm text-center">Released on December 2022</h2>
          <div className="flex-row flex justify-center p-2 gap-4">
            <img src={Apple} className="h-[20px]"/>
            <img src={Android} className="h-[20px]"/>
            <img src={Windows} className="h-[20px]"/>
          </div>
          <p className="px-4 text-justify text-sm font-light">
            {t('Game.Zoids')}
          </p>
          <div className="flex justify-end">
            <motion.button 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="uppercase text-sm m-4 p-2 border rounded-full border-[#252525]">
              Read More
            </motion.button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-md">
          <img src={Mogmog} className="w-[90%] h-[200px] rounded-lg m-[5%] object-cover"/>
          <h1 className="uppercase text-md font-semibold text-center p-2">Shakurel Planet</h1>
          <h2 className="text-sm text-center">Released on June 2022</h2>
          <div className="flex-row flex justify-center p-2 gap-4">
            <img src={Apple} className="h-[20px]"/>
            <img src={Android} className="h-[20px]"/>
          </div>
          <p className="px-4 text-justify text-sm font-light">
            {t('Game.Shakurel')}
          </p>
          <div className="flex justify-end">
            <motion.button 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="uppercase text-sm m-4 p-2 border rounded-full border-[#252525]">
              Read More
            </motion.button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-md">
          <img src={Bubs} className="w-[90%] h-[200px] rounded-lg m-[5%] object-cover"/>
          <h1 className="uppercase text-md font-semibold text-center p-2">Bubble Bobble</h1>
          <h2 className="text-sm text-center">Released on November 2021</h2>
          <div className="flex-row flex justify-center p-2 gap-4">
            <img src={Apple} className="h-[20px]"/>
            <img src={Android} className="h-[20px]"/>
          </div>
          <p className="px-4 text-justify text-sm font-light">
            {t('Game.Bubble')}
          </p>
          <div className="flex justify-end">
            <motion.button 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="uppercase text-sm m-4 p-2 border rounded-full border-[#252525]">
              Read More
            </motion.button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-md">
          <img src={Peko} className="w-[90%] h-[200px] rounded-lg m-[5%] object-contain"/>
          <h1 className="uppercase text-md font-semibold text-center p-2">Peko Pop: Match 3 Puzzle</h1>
          <h2 className="text-sm text-center">Released on December 2020</h2>
          <div className="flex-row flex justify-center p-2 gap-4">
            <img src={Apple} className="h-[20px]"/>
            <img src={Android} className="h-[20px]"/>
          </div>
          <p className="px-4 text-justify text-sm font-light">
            {t('Game.Peko')}
          </p>
          <div className="flex justify-end">
            <motion.button 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="uppercase text-sm m-4 p-2 border rounded-full border-[#252525]">
              Read More
            </motion.button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-md">
          <img src={Aggretsuko} className="w-[90%] h-[200px] rounded-lg m-[5%] object-cover"/>
          <h1 className="uppercase text-md font-semibold text-center p-2">Aggretsuko</h1>
          <h2 className="text-sm text-center">Released on July 2020</h2>
          <div className="flex-row flex justify-center p-2 gap-4">
            <img src={Apple} className="h-[20px]"/>
            <img src={Android} className="h-[20px]"/>
          </div>
          <p className="px-4 text-justify text-sm font-light">
            {t('Game.Aggretsuko')}
          </p>
          <div className="flex justify-end">
            <motion.button 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="uppercase text-sm m-4 p-2 border rounded-full border-[#252525]">
              Read More
            </motion.button>
          </div>
        </SwiperSlide>
      </Swiper>
      <br/>
      <p className="text-white absolute bottom-10 animate-pulse md:hidden">Swipe to see more</p>
      <HiOutlineArrowNarrowRight className="absolute bottom-24 text-gray-500 scale-[3] animate-pulse md:hidden" ref={iconRef}/>
    </div>
  )
}

export default Games