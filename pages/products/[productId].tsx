import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import HeadSeo from '@/components/HeadSeo';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

function ProductDetails() {
  const [data, setData] = useState<any>()
  const [openImage, setOpenImage] = useState<boolean>(false)
  const { locale }  = useRouter()
  const {t}:any = useTranslation("products")
  const router = useRouter()
  const productId = router.query.productId
  const id = Number(productId)


  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff"
  }, [])



  useEffect(() => {
    fetch(`${baseUrl}/products/${id}`)
        .then(res => res.json())
        .then((res) => {
            setData(res)
            
        })
          .catch(err => console.error(err));
  }, [router]);


  return (
    <>
    <HeadSeo title='Laportiva | products'/>
    <div className='product_details_page_wrapper'>
       <h2>{t("product_detail")}</h2>
       
       <div  className='product_details_page_container'>
          <div id='imageMagnifyer' onClick={() => {
            setOpenImage(true)
          }}  className='product_details_page_container_image'>
            <img 
              src={data?.images[0].image_url} 
              alt={data?.name} 
               />
               {/* <Image
                 src={data?.images[0].image_url}
                 alt={data?.name}
                 width={220}
                 height={220}
                 layout="responsive"
               /> */}
          </div>
          <div className='product_details_page_container_description'>
          <div className='product_details_page_container_description_inner'>
            <div className='each_product_detail_box'>
              <h2 className='product_detail_product_name'>{locale === "en" ? data?.name_en : data?.name}</h2>
              {/* <span>Price : {data?.price}</span> */}
               <div><span className='product_detail_product_name_span'>Product Artikul :</span> <span className='product_detail_product_name_span2'> {data?.artikul}</span></div>
               <div><span className='product_detail_product_name_span'>Product code :</span> <span className='product_detail_product_name_span2'> {data?.code}</span></div>
               <div><span className='product_detail_product_name_span'>Outer Carton : </span><span className='product_detail_product_name_span2'>{data?.outer_carton}</span></div>
               <div><span className='product_detail_product_name_span'>Set of :</span> <span className='product_detail_product_name_span2'> {data?.inner_carton}</span></div>
               <div><span className='product_detail_product_name_span'>Country :</span> <span className='product_detail_product_name_span2'> {data?.country}</span></div>
            </div>
          </div>
       <div className='follow-us-container prod_details_follow_us'>
              <span className="footer_menu_title">{t("follow_us")}</span>
                <div className="footer_icons">
                <Link
                  aria-label="facebook"
                  href="https://www.facebook.com/laportivagroup"
                  target="_blank"
                  className="icon-facebook"
                ></Link>
                <Link
                  aria-label="instagram"
                  href="https://www.instagram.com/laportivagroup/"
                  target="_blank"
                  className="icon-instagram"
                ></Link>
                <Link
                  aria-label="linkedin"
                  href="https://www.linkedin.com/company/laportiva-group/mycompany/"
                  target="_blank"
                  className="icon-linkedin"
                ></Link>
                <Link
                  aria-label="youtube"
                  href="https://www.youtube.com/watch?v=D0X6dF_nvFI&ab_channel=WilmaxEngland"
                  target="_blank"
                  className="icon-youtube"
                ></Link>
              </div>
              </div>
       </div>
    </div>
    <div onClick={() => {
        setOpenImage(false)
      }} style={{display : openImage ? "flex" : "none"}} className='zoomed_image_wrapper'>
       <button onClick={() => {
        setOpenImage(false)
      }} 
      className='zoomed_image_closebtn'>X</button>
      <div onClick={(e) => e.stopPropagation()}  className='zoomed_image_wrapper_inner'>
          <img src={data?.images[0].image_url} alt={data?.name} />
      </div>
          {/* <Image src={data?.images[0].image_url} alt="Product Image" width={800} height={800} />  */}
    </div>
    </div>
    </>
  )
}

export default ProductDetails

// Import necessary modules

export const getStaticPaths = async ({ locales }: any) => {
  const paths:any = [];
  let productIds:any = [];
  const response = await fetch(`${baseUrl}/products`);
  const result = await response.json();

  result?.products.forEach((product:any) => {
    productIds.push(product.id.toString());
  });

  locales.forEach((locale: string) => {
    productIds.forEach((productId: string) => {
      paths.push({ params: { productId }, locale });
    });
  });
  

  return {
    paths,
    fallback: true,
  };
};


export async function getStaticProps({ locale }: any) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'products'])),
    },
  };
}

