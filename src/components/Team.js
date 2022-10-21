import React from 'react'
import PersonCard from './PersonCard'
import Footer from './Footer'
import { motion } from 'framer-motion'
import DemoImage from '../assets/images/DemoImage.jpeg'
import CEO from '../assets/images/ceopa.PNG'
import kimy from '../assets/images/kimypa.PNG'
import kisu from '../assets/images/kisupa.PNG'
import makun from '../assets/images/makunpa.PNG'
import myron from '../assets/images/myronpa.PNG'
import wonbd from '../assets/images/wonbdpa.PNG'

const Team = () => {
  return (
    <div className='bg-[#0f2930]'>
      <div className='h-screen flex flex-col xl:flex-row'>
        <div className='w-[100%] h-[30%] xl:w-[35%] xl:h-[100%]'>
          <motion.div 
            initial={{
                x: 0,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
                transition={{
                duration: 1
            }} 
            className='flex flex-col xl:w-[100%] items-left xl:place-content-center pt-[180px]'>
            <h1 className='uppercase font-semibold pl-[40px] py-[1%] text-2xl md:text-4xl text-white'>
              About Our Team
            </h1>
            <h2 className='px-[7.5%] pl-[40px] font-light text-white'>
            We are a group of like-minded people that came together from companies like NCSOFT, Netmarble, Nexon, Neowiz, etc., with the mission of delivering content that touches a global audience.
            </h2>
          </motion.div>
        </div>
        <div className='w-[100%] xl:w-[65%]'>
          <motion.div 
          initial={{
            x: 500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
            transition={{
            duration: 1
          }}
          className='w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 justify-items-center pt-[152px] pb-[70px] 2xl:pr-[30px]'>
            <PersonCard image={CEO} name="HyungWon Lee" position="Chief Executive Officer" linkedIn="https://www.linkedin.com/in/%ED%98%95%EC%9B%90-%EC%9D%B4-b22b89235/" />
            <PersonCard image={wonbd} name="Jaeho Won" position="Chief Development Officer" linkedIn="https://www.linkedin.com/in/jaeho-won-67092623a/" />
            <PersonCard image={kisu} name="Kisu Kim" position="Chief Technology Officer" linkedIn="https://www.linkedin.com/in/kisu-kim-59906b252/" />
            <PersonCard image={myron} name="Sungbok Jung" position="Chief Business Officer" linkedIn="https://www.linkedin.com/in/%EC%84%B1%EB%B3%B5-%EC%A0%95-16a529251/" />
            <PersonCard image={kimy} name="Yangil Kim" position="Chief Operating Officer" linkedIn="https://www.linkedin.com/in/yang-il-kim-122937251/" />
            <PersonCard image={makun} name="Makun" position="Chief Strategy Officer" linkedIn="https://www.linkedin.com/in/%ED%98%81%EB%AF%BC-%EB%A7%88-776534251/" />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Team