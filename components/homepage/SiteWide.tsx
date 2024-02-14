import Slider from "react-slick";
import { siteWideData } from "@/public/data/siteWide/siteWideData";
import { SiteWide } from "@/types/siteWideType";
import Image from "next/legacy/image";
import React, { useState } from "react";
import Link from "next/link";
import ArrowDown from "@/public/icons/ArrowDown/ArrowDown";
import { useTranslation } from "next-i18next";


 function SiteWide() {
    const [sliderRef, setSliderRef] = useState<any>(null);

    const { t }:any = useTranslation()


    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        // autoplay:true,
        // fade:true,
        speed: 400,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="sitewide_wrapper">
            <Slider ref={setSliderRef} className="slider_sitewide" {...settings}>
                {siteWideData.map((item:SiteWide) => {
                    return (
                      <React.Fragment key={item.id}>
                            <Image
                              key={item.id}
                              className="siteWide_image"
                              src={item.url}
                              alt="img"
                              width={0}
                              height={0}
                              sizes="100vw"
                              priority={true}

                            />
                          <div className="siteWide_description">
                             <h1 className="sitewide_title">{t(item.description)}</h1>
                            <Link href="/products" className="siteWide_discover">{t("discover_more")}</Link>
                          </div>
                      </React.Fragment>
                    )
                })}
            </Slider>
        <button className="siteWidePrev"  aria-label="prev_arrow" onClick={sliderRef?.slickPrev}>
          <ArrowDown/>
        </button>
        <button className="siteWideNext" aria-label="next_arrow" onClick={sliderRef?.slickNext}>
          <ArrowDown/>
        </button>

        
        </div>
    )
}

export default SiteWide