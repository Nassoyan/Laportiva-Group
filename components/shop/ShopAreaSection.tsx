import React from 'react'
import FilterSection from './FilterSection'
import { useRouter } from 'next/router'


const ShopAreaSection = (
  // {products}:HomeProps
  {t}:any
  ) => {

    const { locale } = useRouter()
  
  return (
    <div className="product-page-wrapper">
        <div className='product-page-title'>
            <h2 
            style={{fontWeight:locale==="am" ? "400" : "300"}}
            >{t("product page")}</h2>
        </div>
            <FilterSection 
            t={t}
             />
    </div>
  )
}

export default ShopAreaSection