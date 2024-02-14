import { HomeProps } from '@/pages/index';
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { scrollToTop } from '@/public/helpers/scrollToTop';

function BrandSection({brands, setBrandId, t}:HomeProps) {

  const [selectedBrandId, setSelectedBrandId] = useState<number | null>(null);
  const { locale } = useRouter()

  
  return (
    <section className='brand-section'>
       <h3>{t("filter_brands")}</h3>
       <div className='brand-uls'>
         <span onClick={() => {
                if(setBrandId) {
                  setBrandId("")
                  setSelectedBrandId(null);
                }
              }}
              className="brandsection_allbrands"
              // className={selectedBrandId === null ? 'selected' : ''}
         >{t("all_brands")}</span>
         {brands?.map((brand) => {
           return (
             <span
             style={{fontWeight: locale==="am" ? "500" : "400"}}
             className={selectedBrandId === brand.id ? 'selected' : 'brand_uls_bold'}
             key={brand.id}
              onClick={() => {
                if(setBrandId) {
                  setBrandId(brand.id)
                  setSelectedBrandId(brand.id);
                }
                scrollToTop()
              }}
              >
               {brand.name}
             </span>
           )
         })}
       </div>
    </section>
  )
}

export default BrandSection