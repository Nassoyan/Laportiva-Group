import '@/styles/globals.scss'
import '@/styles/header/header.scss'
import '@/styles/siteWide/sitewide.scss'
import '@/styles/productSlider/productSlider.scss'
import '@/styles/menubar/menubar.scss'
import '@/styles/category/category.scss'
import '@/styles/brands/brands.scss'
import '@/styles/cooperations/cooperations.scss'
import '@/styles/contact-us/contact-us.scss'
import '@/styles/footer/footer.scss'
import '@/styles/shop/shop.scss'
import '@/styles/shop/filterSection.scss'
import '@/styles/shop/categoriesSection.scss'
import '@/styles/shop/categoriesSection.scss'
import '@/styles/shop/brandSection.scss'
import '@/styles/pagination/pagination.scss'
import '@/styles/blog/blogsection.scss'
import '@/styles/whychooseus/whyChooseUs.scss'
import '@/styles/about/about.scss'
import '@/styles/blog/blogPage.scss'
import '@/styles/blog/blogPageSection.scss'
import "../public/icons/icomoon/style.css"
import type { AppProps } from 'next/app'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout"
import { appWithTranslation } from 'next-i18next'



const App = ({ Component, pageProps }:AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default appWithTranslation(App)

