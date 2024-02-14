import { partnersData } from '@/public/data/partners/partners';
import Image from 'next/image';
import React from 'react'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';


function Partners() {

  const { t }:any = useTranslation()
  const { locale } = useRouter()
    
  return (
    <>
    <div className='partners_wrapper'>
      <div id="partners" className='cooperation_wrapper'>
          <h2 
          // style={{fontWeight:locale==="am" ? "300" : ""}}
          >{t("partners")}</h2>
      </div>
          <div className='cooperation_overflow'>
            {partnersData?.map((partner) => {
              return (
                <div key={partner.id} className='each_cooperation'>
                  <div>
                  <Image 
                   aria-hidden={true}
                   src={partner.url}  
                   alt='cat img'
                  //  loading='lazy'
                   priority={true}
                     />
                  </div>
                  {/* <p>{partner.name}</p> */}
                </div>
              )
            })}
          </div>
    </div>
    </>
  )
}

export default Partners