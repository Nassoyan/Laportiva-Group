import Link from "next/link"
import { HeaderType } from "@/types/header.type"
import { headerData } from "@/public/data/header/header-Data"
import { useEffect, useState } from "react"
import Image from "next/image"
import LapLogo from "../../public/images/logo/lapLogo.png"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"


export default function Header() {
    
 const { t: translation }:any = useTranslation()

 const { locales, locale } = useRouter()
 const router = useRouter()

    
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false)
    const [openLang, setOpenLang] = useState<Boolean>(false)

    


    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 300) {
          setIsHeaderFixed(true);
        } else {
          setIsHeaderFixed(false);
        }
      };
      router.pathname !== "/products" && window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [])

    return (
        <header id="header">
        <div className="top_features">
            <span>{translation("return_policy")}</span>
            <span>/</span>
            <p>{translation("free_shipping")}</p>
            <span>/</span>
            <p>{translation("trust")}</p>
        </div>
        <div className={`header_wrapper ${isHeaderFixed? 'fixed':''}`}>
            <div role="link" className="header_logo">
            <span onClick={(e) => {
                e.stopPropagation()
                setOpenMenu(!openMenu)
            }} className="icon-menu"></span>
            <div style={{ display: openMenu ? "block" : "none" }} className="header_sidebar_uls">
                <ul>
                    {headerData?.map((item) => {
                        return (
                            <li onClick={() => {
                                setOpenMenu(!openMenu)
                            }} 
                                key={item.id}><Link href={item.slug}>{translation(item.name)}</Link></li>
                        )
                    })}
                </ul>
            </div>

            </div>
            <Link className="displaynone" href="/">
                     <Image src={LapLogo} alt="Laportiva group logo" priority layout="instrinsic" width={60} height={60} />
            </Link>
            <ul className="header_navs">
                <li className=" header_logo_li">
                    <Link href="/">
                     <Image src={LapLogo} alt="Laportiva group logo" priority layout="instrinsic" width={60} height={60} />
                    </Link>
                </li>
                {headerData.map((link: HeaderType) => {
                    return (
                        <li key={link.id}>
                            <Link
                            //  style={{fontWeight: locale==="am" ? "300" : ""}}
                                  className="header_link" href={link.slug}>
                                {translation(link.name)}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className="language">
            <span onClick={() => setOpenLang(!openLang)} className="icon-earth"></span>
                <div style={{ display: openLang ? "block" : "none" }} className="header_language_uls"  id="top-header-language-dropdown">
                    <div>
                        {locales?.map((lang, idx) => {
                            return (
                                <Link
                                    onClick={() => {
                                        setOpenLang(!openLang);
                                    }}
                                    key={idx}
                                    href={{
                                        pathname: router.pathname,
                                        query: router.query.productId
                                        ? { ...router.query, productId: router.query.productId }
                                        : { ...router.query }, // Include existing query parameters and add productId only if it exists
                                    }}
                                    locale={lang}
                                    >
                                    {lang}
                                </Link>

                                //  <Link onClick={() => {
                                //      setOpenLang(!openLang)
                                //  }} key={idx} href="" locale={lang}>{lang}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
          <Link className='scrollup' href="#header" aria-hidden="true">&uarr;</Link>
        </header>
    )
}

