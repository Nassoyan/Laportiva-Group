import Image from 'next/image'
import React, { useState } from 'react'
import blogImg from "../../public/images/blog/blog.png"
import { blogData } from '@/public/data/blog/blogData'
import { BlogType } from '@/types/blogType';
import { scrollToTop } from '@/public/helpers/scrollToTop'


function BlogPageSection() {
    const [blogState, setBlogState] = useState<BlogType | any>(blogData[0]);
    

    function handleBlogClick(id:number) {
        setBlogState(blogData[id])
    }
  return (
    <div className='blog_page_section_container'>

        <div className='blog_page_section_content'>
                <div className='blog_page_section_main_content_with_image'>
                    <Image src={blogImg} alt="blog image" priority  />
                    <div className='blog_page_section_content_text'>
                        <span className='blog_page_section_content_text_title'>{blogState?.brand_name + " " + blogState?.id}</span>
                        <span className='blog_page_section_content_text_description'>{blogState?.short_description}</span>
                    </div>
                </div>
            <div className='blog_page_section_main_content_description'>
                <p>{blogState?.long_description}</p>
            </div>
        </div>

        <div className='blog_page_section_main_content_mapped_wrapper'>
            <div className='blog_page_section_main_content_mapped'>
                    {blogData?.map((item, idx)=> {
                        return (
                            <div onClick={() => scrollToTop()} key={item.id} className='box-wrapper'>
                                <div key={item.id} onClick={() => handleBlogClick(idx)} className='blog_page_section_main_content_box'>
                                <Image src={blogImg} alt="blog img" priority />
                                <span className='blog_page_section_main_content_box_span'>{item?.brand_name+" "+idx}</span>
                                <p className='blog_page_section_main_content_box_p'>{item?.short_description}</p>
                            </div>
                            </div>
                     
                        )
                    })}
                </div>  
        </div>
      

    </div>
  )
}

export default BlogPageSection