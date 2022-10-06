import React from 'react'
import PersonCard from './PersonCard'

const Team = () => {
  return (
    <div className='h-screen flex flex-col xl:flex-row'>
      <div className='w-[100%] h-[30%] xl:w-[35%] xl:h-[100%]'>
        <div className='flex flex-col xl:w-[100%] items-left xl:place-content-center pt-[180px]'>
          <h1 className='uppercase font-semibold px-[5%] py-[1%] text-2xl md:text-4xl text-white'>
            About Our Team
          </h1>
          <h2 className='px-[5%] py-[1%] font-light text-white'>
            In Lorem esse amet dolor. Labore exercitation proident qui ipsum commodo nisi duis.
          </h2>
        </div>
      </div>
      <div className='w-[100%] xl:w-[65%]'>
        <div className='w-[100%] h-[calc(100%-152px)] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 justify-items-center xl: mt-[152px] mb-[152px]'>
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </div>
    </div>
  )
}

export default Team