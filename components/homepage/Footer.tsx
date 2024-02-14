import React from 'react'
import { footerDataCompany, footerDataSupport } from '@/public/data/footer/footerData';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function Footer() {

  const { t }:any = useTranslation()
  const { locale } = useRouter()
  return (
    <footer className='footer_wrapper'>
        <div className='footer-container'>
            <div className='footer_desc'>
                <h1 className='lap_p'>{t("laportiva_group")}</h1>
                 
                <p style={{fontWeight: locale==="am" ? 300 : 400}}
                  className='lap_desc'>{t("footer_text")}</p>
            </div>
            <div className="footer_menus">
            <div className="footer_menu">
              <span className="footer_menu_title">{t("company")}</span>
              <ul className='footer_menu_navs'>
                {footerDataCompany.map((item, index) => {
                  return (
                    <li className="menu_item" key={index}>
                      <Link 
                      style={{fontWeight: locale==="am" ? 300 : 400}} 
                      href={item.slug}>
                        {t(item.name)} </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="footer_menu">
              <span className="footer_menu_title">{t("info")}</span>
              <ul className="footer_ul underline">
                {footerDataSupport.map((item, index) => {
                  return (
                    <li className="menu_item" key={index}>
                      <span style={{fontWeight: locale==="am" ? 300 : 400}}>{item.name}</span>
                    </li>
                  );
                })}
              </ul>
              <div className='follow-us-container'>
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
        </div>
    </footer>
  )
}

export default Footer