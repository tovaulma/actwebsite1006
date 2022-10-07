import {useState, useEffect} from 'react'
import client from '../client'
import {useParams, Link} from 'react-router-dom'
import imageUrlBuilder from '@sanity/image-url'
import PortableText from 'react-portable-text'


const builder = imageUrlBuilder(client)

const urlFor = (source) => {
  return builder.image(source)
}



const SinglePost = () => {
    const [singlePost, setSinglePost] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        client.fetch(`
            *[slug.current == "${slug}"] {
                title,
                body,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                author -> {
                    name,
                    image
                }
            }
        `).then((data) => setSinglePost(data[0])).catch(err => console.error(err))
    }, [slug])

    if (!singlePost) return <div>Loading...</div>

  return (
    <div className='text-white h-screen'>
        <div>
            <h1>{singlePost.title}</h1>
            <img src={urlFor(singlePost.mainImage).url()}/>
            <img src={urlFor(singlePost.author.image).url()}/>
            <h2>{singlePost.author.name}</h2>
        </div>
    </div>
  )
}

export default SinglePost