import ShopAreaSection from '@/components/shop/ShopAreaSection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import React from 'react'
import { HomeProps } from '../index';
import HeadSeo from '@/components/HeadSeo';

function index(
  // {products}:HomeProps
  {props}:any
  ) {
  
    const { t }:any = useTranslation("products")
  
  return (
    <>
    <HeadSeo title="Laportiva | products"/>
     <ShopAreaSection  
       t={t}
       />
    </>
  )
}

export default index

// export const getStaticProps = async () => {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

//   const fetchAPI = async (url:string) => {
//     const response = await fetch(`${baseUrl}${url}`);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
//     }
//     return response.json();
//   };

//   try {
//     const products = await fetchAPI('/products');

//     return {
//       props: {
//         products,
//       },
//       revalidate: 10,
//     };
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return {
//       props: {
//         products: [],
//       },
//     };
//   }
// };

export async function getStaticProps({ locale }:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'about',
        "common",
        "products"
      ])),
    },
  }
}