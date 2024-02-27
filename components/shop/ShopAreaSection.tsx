import React from 'react'
import FilterSection from './FilterSection'
import { useRouter } from 'next/router'
import Link from 'next/link'


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
            <p><Link href="/">{t("Home")}</Link> | {t("Products")}</p>
        </div>
            <FilterSection 
              t={t}
             />
    </div>
  )
}

export default ShopAreaSection