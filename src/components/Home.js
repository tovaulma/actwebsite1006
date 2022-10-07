import React from 'react'
import Main from './Main'
import Games from './Games'
import Footer from './Footer'
import BlogSnippet from './BlogSnippet'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Main />
      <Games />
      <BlogSnippet />
      <Footer />
    </div>
  )
}

export default Home