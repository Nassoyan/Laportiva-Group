import BlogPageSection from '@/components/blogpage/BlogPageSection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import HeadSeo from '@/components/HeadSeo'
import { useRouter } from 'next/router'

function index() {
  const { t }:any = useTranslation("blog")
  const { locale } = useRouter()

  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff"
  }, [])
   
  return (
    <>
    <HeadSeo title="Laportiva | blog" />
    <div className='blogpage_wrapper'>
        <div className='blog_page_title'>
            <h2 className='blogpage_title_h2'  style={{fontWeight:locale==="am" ? "400" : ""}}
            >{t("blog")}</h2>
        </div>
        <BlogPageSection/>
    </div>
    </>
  )
}

export default index

export async function getStaticProps({ locale }:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'blog',
        "common"
      ])),
    },
  }
}