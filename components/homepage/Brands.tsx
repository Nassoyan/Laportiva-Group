import { HomeProps } from '@/pages/index';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const baseUrl = "http://localhost:3001"



function Brands({ brands }:HomeProps) {

  const { locale }:any = useRouter()
  
  const {t: translation}:any = useTranslation()
    
  return (
    <>
    <div id="brands" className='brand_wrapper'>
       <div className='brand_title'>
         <p >{translation("since")} 2003</p>
         <h2 
        //  style={{fontWeight: locale==="am" ? 300 : ""}}
         >{translation("browse brands")}</h2>
        </div>
    </div>
        <div className='brand_overflow'>
          {brands?.map((brand) => {
            return (
              <Link href={`${baseUrl}/products?brandId=${brand.id}`} key={brand.id} className='each_brand'>
                <div>
                  <Image
                    width={306} 
                    height={510} 
                    src={brand.image_url}  
                    alt='cat img' 
                    priority={true}
                    />
                </div>
                {/* <p>{brand.name}</p> */}
              </Link>
            )
          })}
        </div>
    </>
  )
}

export default Brands