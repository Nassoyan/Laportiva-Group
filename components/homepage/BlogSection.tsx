import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import blogImg from "../../public/images/blog/blog.png"
import { useTranslation } from 'next-i18next'

function BlogSection() {

    const { t }:any = useTranslation()
  return (
      <>
        <div className='blog_section_wrapper'>
            <div className='blogsection_description'>
                <div className='blogsection_description_container'>
                    <p className='lap_stories_p1'>Laportiva Stories</p>
                    <p className='lap_stories_p2'>Culinary insights and practical tips</p>
                    <div className='to_the_blog_container'>
                        <div className='to_the_blog_link'>
                        <Link className='a_to_the_blog' href="/blog">To the Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blogsection_image'>
                <Image src={blogImg} alt="img" height={500} />
            </div>
        </div>
        <div className='detailed_info'>
            <p className='detailed_info_p'>{t("for_more")}<span>&rarr;</span> <Link href="/contact-us">contact</Link> .</p>
        </div>
      </>
  )
}

export default BlogSection