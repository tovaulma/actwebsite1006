import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import ACTLogoBW from '../assets/images/ACTLogoBW.png'
import { FaBars } from 'react-icons/fa'
import MenuItems from './MenuItems'
import { useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const showMenu = () => {
      setActive(!active)
    }
  return (
    <div className="absolute flex flex-row w-screen top-0 p-10 items-start justify-between mx-auto z-100 xl:items-center content-center">
        <nav className="flex flex-row w-screen justify-between">
            <NavLink to ='/'>
                <motion.img
                initial={{
                    x: -500,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5
                }}
                className="flex flex-row items-center h-[3rem] md:h-[4rem]"
                src={ACTLogoBW}/>
            </NavLink>
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
                duration: 1.5
            }}
            className="flex flex-row items-center text-white cursor-pointer">
                <div className="md:hidden">
                    <FaBars onClick={showMenu} className="cursor-pointer scale-150 items-center"/>
                </div>
                <ul className="hidden md:flex uppercase tracking-[4px] font-bold gap-8 p-6">
                    <li className="hover:text-orange-300">
                        <NavLink to='/'>About</NavLink>
                    </li>
                    <li className="hover:text-orange-300">
                        <NavLink to='/Blog'>Blog</NavLink>
                    </li>
                    <li className="hover:text-orange-300">
                        <NavLink to='/Team'>Team</NavLink>
                    </li>
                    <li className="hover:text-orange-300">
                        <NavLink to='/Careers'>Careers</NavLink>
                    </li>
                </ul>

                <MenuItems showMenu={showMenu} active={active}/>
            </motion.div>
        </nav>
    </div>
  )
}

export default Navbar