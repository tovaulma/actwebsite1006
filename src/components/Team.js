import React from 'react'
import PersonCard from './PersonCard'
import Footer from './Footer'
import { motion } from 'framer-motion'

const Team = () => {
  return (
    <div>
      <div className='h-[100%] flex flex-col xl:flex-row'>
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
                duration: 1.5
            }} 
            className='flex flex-col xl:w-[100%] items-left xl:place-content-center pt-[180px]'>
            <h1 className='uppercase font-semibold px-[10%] py-[1%] text-2xl md:text-4xl text-white'>
              About Our Team
            </h1>
            <h2 className='px-[10%] py-[1%] font-light text-white'>
              In Lorem esse amet dolor. Labore exercitation proident qui ipsum commodo nisi duis.
            </h2>
          </motion.div>
        </div>
        <div className='w-[100%] xl:w-[65%]'>
          <div className='w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 justify-items-center pt-[152px] pb-[70px]'>
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Team