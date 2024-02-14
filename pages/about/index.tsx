import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { useTranslation } from 'next-i18next'
import HeadSeo from '@/components/HeadSeo'

function index() {

    const {t}:any = useTranslation("about")

  return (
    <>
    <HeadSeo title="Laportiva | about" />
    <div className='about_wrapper'>
        <span> {`${t("hello world")}`} </span>
        <p className='about_title'>Lit to make, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className='about_wrapper_row'>
            <div className='about_wrapper_container'>
                <div className='about_circles'></div>
                <p className='about_date'>2003</p>
                <div className='about_treeline'></div>
                <p className='about_description'>Lit to make, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='about_border notvisibleborder'></div>
            <div className='about_wrapper_container'></div>
        </div>

        <div className='about_wrapper_row'>
            <div className='about_wrapper_container'></div>
            <div className='about_border notvisibleborder'></div>
            <div className='about_wrapper_container'>
            <div className='about_circles2'></div>
            <p className='about_date_right'>2006</p>
                <div className='about_treeline_right'></div>
                <p className='about_description2'>Lit to make, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>

        <div className='about_wrapper_row'>
            <div className='about_wrapper_container'>
            <div className='about_circles'></div>
                <p className='about_date'>2010</p>
                <div className='about_treeline'></div>
                <p className='about_description'>Lit to make, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='about_border notvisibleborder'></div>
            <div className='about_wrapper_container'></div>
        </div>

        <div className='about_wrapper_row'>
            <div className='about_wrapper_container'></div>
            <div className='about_border notvisibleborder'></div>
            <div className='about_wrapper_container'>
            <div className='about_circles2'></div>
            <p className='about_date_right'>2013</p>
                <div className='about_treeline_right'></div>
                <p className='about_description2'>Lit to make, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>

       
    </div>
    </>
  )
}

export default index

export async function getStaticProps({ locale }:any) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'about',
          "common"
        ])),
      },
    }
  }