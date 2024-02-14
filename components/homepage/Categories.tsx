import { HomeProps } from '@/pages/index';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import img from "../../public/images/animated/animated.jpg"
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const baseUrl = process.env.NEXT_PUBLIC_SECOND_URL


function Categories({ categories }:HomeProps) {
  
  const { locale }:any = useRouter()
  const { t: translation}:any = useTranslation()
    
  return (
    <>
    <div className='category_wrapper'>
        <div className='category_title'>
          <h2 
          // style={{fontWeight:locale==="am" ? 300 : 400}}
          >{translation("browse categories")}</h2>
        </div>
    </div>
        <div className='category_overflow'>
          {categories?.map((category) => {
            return (
              <Link href={`${baseUrl}/products?categoryId=${category.id}`} key={category.id} className='each_category'>
                <div
                
                 style={{position:"relative"}}
                >
                 <Image 
                  src={img}  
                  alt='cat img' 
                  fill
                  // loading='lazy'
                  priority={true}
                  />
                </div>
                <p>{translation(category.name)}</p>
              </Link>
            )
          })}
        </div>
    </>
  )
}

export default Categories