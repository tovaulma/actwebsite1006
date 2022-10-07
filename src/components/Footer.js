import React from 'react'
import ACTLogoBW from '../assets/images/ACTLogoBW.png'

const Footer = () => {
  return (
    <div className="h-[100%] relative bg-[#252525] w-[100%] text-[#252525] overflow-hidden flex flex-row">
      <div className='p-10'>
        <img src={ACTLogoBW} className='w-[100px] pb-2'/>
        <p className='text-white text-xs pt-2'>© ACT Games Co., Ltd. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer