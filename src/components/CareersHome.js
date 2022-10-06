import React from 'react'
import { motion } from 'framer-motion'

const CareersHome = () => {
  return (
    <div className='grid place-items-center h-screen'>
        <motion.div
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1,
        }}
        transition={{
            duration: 1.5
        }}>
            <h1 className='uppercase text-white text-center w-screen align-center'>Careers @ ACT</h1>
        </motion.div>
    </div>
  )
}

export default CareersHome