import React from 'react'
import { useState, useEffect } from 'react'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import Footer from './Footer'
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    client.fetch(
      `*[_type == "post"]{
        _id,
        title,
        slug,
        mainImage,  
        publishedAt,
        body,
        author -> {
          name,
          image
        }
      }`
    ).then((data) => setPosts(data)).catch(console.error)
  }, [])

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className="h-[100%] flex flex-col">
      <div className="flex h-[400px] items-center justify-center">
        <h3 className="uppercase tracking-[0.05rem] text-white font-semibold 
        text-4xl text-center">ACT Blog</h3>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-[40px] p-5'>
        {posts.map((post) => (
          <article key={post.slug.current} className="w-[340px] md:w-[500px]">
            <img src={urlFor(post.mainImage).url()} className="w-[500px] h-[300px] object-cover border"/>
            <h2 className='text-white text-lg font-bold pt-2'>{post.title}</h2>
            <h3 className='text-white text-sm font-light pb-1'>Published on: {post.publishedAt.slice(0, 10)}</h3>
            <h3 className='text-white text-md font-medium pb-1'>Written by {post.author.name}</h3>
            <Link to={`/Blog/${post.slug.current}`} className='uppercase text-white border rounded-lg px-2 py-1 my-1'>Read Post</Link>
          </article>
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