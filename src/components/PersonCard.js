import React from 'react'
import DemoImage from '../assets/images/DemoImage.jpeg'
import { SocialIcon } from 'react-social-icons';

const PersonCard = () => {
  return (
    <div className='border rounded-md bg-white w-[340px] h-[355px] flex flex-col items-center gap-3'>
        <img src={DemoImage} className='w-[300px] h-[220px] object-cover rounded-lg mt-5 mx-5'/>
        <div className='flex flex-row justify-between w-[90%]'>
            <div className='p-5'>
                <h2 className='text-lg font-medium'>Hyungwon Lee</h2>
                <h3 className='text-sm'>Chief Executive Officer</h3>
            </div>
            <div className='p-5'>
                <SocialIcon url="https://www.linkedin.com/in/sewon-park-934346250/" fgColor="#252525" bgColor="transparent"/>
            </div>
        </div>
    </div>
  )
}

export default PersonCard