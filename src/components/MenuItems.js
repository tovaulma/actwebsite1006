import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

const MenuItems = ({showMenu, active}) => {
  return (
    <ul className={active ? 'flex-col flex items-center fixed left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 inset-0 justify-center p-8 md:hidden' : 'hidden'}>
        <MdOutlineClose onClick={showMenu} className="scale-150 cursor-pointer"/>
        <li>
            <a href='/'>About</a>
        </li>
        <li>
            <a href='/'>News</a>
        </li>
        <li>
            <a href='/'>Team</a>
        </li>
        <li>
            <a href='/'>Careers</a>
        </li>
    </ul>
  )
}

export default MenuItems