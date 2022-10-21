import React from 'react'
import { useState, useEffect } from 'react'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import Footer from './Footer'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import bg from '../assets/images/bg_pc02.png'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    client.fetch(
      `*[_type == "post"] | order(publishedAt desc){
        _id,
        title,
        slug,
        mainImage,  
        publishedAt,
        body,
        author -> {
          name,
          image
        },
        categories[0] -> {
          title,
          slug
        },
      }`
    ).then((data) => setPosts(data)).catch(console.error)
  }, [])

  console.log(posts)

  return (
    <div className='bg-white'>
    <div className="h-[100%] flex flex-col">
      <img src={bg} className="h-[300px] w-screen object-cover"/>
      <motion.div 
            initial={{
                x: 0,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
                transition={{
                duration: 1
            }}  className="flex h-[300px] items-center justify-center">
        <h3 className="uppercase tracking-[0.1rem] font-semibold 
        text-5xl text-center">ACT Blog</h3>
      </motion.div>
      <br/>
      <div className='grid grid-cols-1 xl:grid-cols-2 justify-items-center'>
        {posts.map((post) => (
          <Link to={`/Blog/${post.slug.current}`} className='cursor-pointer'>
            <article key={post.slug.current} className="flex flex-col">
              <img src={urlFor(post.mainImage).url()} className="w-[calc(700px*0.5)] h-[calc(500px*0.5)] md:w-[calc(700px*0.8)] md:h-[calc(500px*0.8)] 2xl:w-[700px] 2xl:h-[500px] object-cover"/>
              <h3 className='text-purple-600 pt-4 text-center'>News</h3>
              <h2 className='text-xl font-bold pt-2 text-center mb-[10rem] w-[calc(700px*0.5)] md:w-[calc(700px*0.8)] 2xl:w-[700px]'>{post.title}</h2>
              
              {/*<h3 className='text-white text-sm font-light pb-1'>Published on: {post.publishedAt.slice(0, 10)}</h3>*/}
              {/*<h3 className='text-white text-md font-medium pb-1'>Written by {post.author.name}</h3>*/}
            </article>
          </Link>
        ))}
      </div>
    </div>
    <div className='w-screen h-[100px]'>

    </div>
    <Footer />
    </div>
  )
}

export default Blog