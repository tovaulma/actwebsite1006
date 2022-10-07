import React from 'react'
import { SocialIcon } from 'react-social-icons';

const PersonCard = ({image, name, position, linkedIn}) => {
  return (
    <div className='border rounded-md bg-white w-[340px] h-[355px] flex flex-col items-center gap-3'>
        <img src={image} className='w-[300px] h-[220px] object-cover rounded-lg mt-5 mx-5'/>
        <div className='flex flex-row justify-between w-[90%]'>
            <div className='p-5'>
                <h2 className='text-lg font-medium'>{name}</h2>
                <h3 className='text-[0.8rem]'>{position}</h3>
            </div>
            <div className='p-5'>
                <SocialIcon url={linkedIn} fgColor="#252525" bgColor="transparent"/>
            </div>
        </div>
    </div>
  )
}

export default PersonCard