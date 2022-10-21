import React from 'react'
import ACTLogoBW from '../assets/images/ACTLogoBW.png'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t, i18n } = useTranslation()

  function handleClick(lang) {
      i18n.changeLanguage(lang)
  }

  return (
    <div className="h-[100%] relative bg-[#252525] w-[100%] text-[#252525] overflow-hidden flex flex-row">
      <div className='p-10'>
        <img src={ACTLogoBW} className='w-[100px] pb-2'/>
        <p className='text-white text-xs pt-2'>© ACT Games Co., Ltd. All Rights Reserved.</p>
      </div>
      <div className='text-white'>
        <li>
          <button onClick={()=>handleClick('kr')}>Korean</button>
        </li>
        <li>
          <button onClick={()=>handleClick('en')}>English</button>
        </li>
        <li>
          <button onClick={()=>handleClick('jp')}>Japanese</button>
        </li>
      </div>
    </div>
  )
}

export default Footer