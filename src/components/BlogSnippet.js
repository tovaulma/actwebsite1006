import gsap from 'gsap'
import { useRef, useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from "react-router-dom";
import client from '../client'
import { ScrollTrigger } from "gsap/all";
import { motion } from 'framer-motion'
import bg from '../assets/images/bg.png'

gsap.registerPlugin(ScrollTrigger)

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const BlogSnippet = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    client.fetch(
      `*[_type == "post"] | order(publishedAt desc)[0..2]{
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

  const titleRef = useRef(null)
  useEffect(() => {
    const el = titleRef.current;
    gsap.fromTo(el, 
    {
      x: -500,
      opacity: 0
    }, 
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: el
      }
    })
  }, [])

  const postRef = useRef(null)
  useEffect(() => {
    const el = postRef.current;
    gsap.fromTo(el, 
    {
      y: 500,
      opacity: 0
    }, 
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: el
      }
    })
  }, [])
  return (
    <div className='md:h-screen flex flex-col relative justify-evenly'>
      <div className="relative" ref={titleRef}>
        <h3 className="uppercase tracking-[0.05rem] text-white font-semibold 
        text-4xl text-center z-20">Recent Blog Posts</h3>
      </div> 
      <div ref={postRef}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-10 z-20 py-10'>
        {posts.map((post) => (
          <Link to={`/Blog/${post.slug.current}`} className='cursor-pointer'>
            <article key={post.slug.current} className="flex flex-col">
              <img src={urlFor(post.mainImage).url()} className="w-[calc(100%)] object-cover"/>
              <h2 className='text-white text-xl font-bold pt-2 text-center mt-5 w-[calc(100%)]'>{post.title}</h2>
              
              {/*<h3 className='text-white text-sm font-light pb-1'>Published on: {post.publishedAt.slice(0, 10)}</h3>*/}
              {/*<h3 className='text-white text-md font-medium pb-1'>Written by {post.author.name}</h3>*/}
            </article>
          </Link>
        ))}
        </div>
        <div className='flex justify-center'>
          <Link to="/Blog">
            <motion.button 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}className='text-black rounded-full border p-2 px-4 tracking-wider uppercase bg-white font-semibold'>
              News Archive
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogSnippet