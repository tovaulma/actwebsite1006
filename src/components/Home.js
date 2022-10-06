import React from 'react'
import Main from './Main'
import Games from './Games'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='overflow-y-hidden'>
      <Main />
      <Games />
      <Footer />
    </div>
  )
}

export default Home