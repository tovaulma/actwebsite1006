import React from 'react'
import Main from './Main'
import Games from './Games'
import Contact from './Contact'
import Footer from './Footer'
import BlogSnippet from './BlogSnippet'

const Home = () => {
  return (
    <div className='overflow-x-hidden bg-[#0f2930]'>
      <Main />
      <Games />
      <BlogSnippet />
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home