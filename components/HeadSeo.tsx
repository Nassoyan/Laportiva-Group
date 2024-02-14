import { HeadSeo } from '@/types/headSeo'
import Head from 'next/head'

const HeadSeo = ({ description, title, ogImage, icon }:HeadSeo) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:description" content={description} />
      <link rel="icon" href={icon} />
    </Head>
  )
}

export default HeadSeo