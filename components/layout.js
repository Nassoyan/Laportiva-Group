import React, { useEffect } from 'react'
import Header from "../components/homepage/Header"
import Footer from "../components/homepage/Footer"
import { useRouter } from 'next/router'
// import HeaderWithoutScroll from './homepage/HeaderWithoutScroll'


function Layout({children}) {

  const router = useRouter()
  const pathname = router.pathname


  // useEffect(() => {
  //   switch (pathname) {
  //         case '/products':
  //           return document.body.style.background = "#ffffff"
  //           break
  //         default:
  //           return document.body.style.background = "#f0f0dc"
  //       }
  // }, [])

  // function chooseBackground() {
  //   switch (pathname) {
  //     case '/products':
  //       return <HeaderWithoutScroll  />
  //       break
  //     case '/products':
  //       return <HeaderWithoutScroll />
  //       break
  //     default:
  //       return <Header  />
  //   }
  // }
  return (
    <>
    {/* {chooseHeader()} */}
    <Header />
     {children}
    <Footer />
    </>
  )
}

export default Layout