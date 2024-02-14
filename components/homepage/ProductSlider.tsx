import Image from 'next/legacy/image'
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { brandData } from '@/public/data/brandData/brandData'
import { HomeProps } from '@/pages/index';

export default function ProductSlider({products}:HomeProps) {
  

  
  const [sliderRef, setSliderRef] = useState<any>(null)


  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    // swipeToSlide: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed:3500,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.68,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }



  return (
    
      <div className="topProdsSlider_main">
        <h2 className='product_slider_title'>Products</h2>
        <div className='topProdsSlider_main_container'>
          <Slider
            ref={setSliderRef}
            {...settings}
            className="topProdsSlider_slider_wrapper"
          >
            {products?.products?.map((item, index) => {
              return (
                <div
                  key={index}
                  className='topProdsSlider_main_item'
                >
                  <div className="img-block">
                    <Image
                      className="img"
                      height={245}
                      width={245}
                      // layout="responsive"
                      alt={'product'}
                      objectFit="cover"
                      src={item?.images[0].image_url}
                      priority
                    />
                  </div>
                  <p className="topProdsSlider_main_item_name">{item.name}</p>
                  {/* position absolute */}
                </div>
              )
            })}
          </Slider>

        </div>
        {products?.products?.length ? (
          <div className="controls">
            <button aria-label="prev-arrow" onClick={sliderRef?.slickPrev}>
            <span className="icon-keyboard_arrow_left"></span>

            </button>
            <button aria-label="next-arrow" onClick={sliderRef?.slickNext}>
            <span className="icon-keyboard_arrow_right"></span>
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      // <div className="topProdsSlider__main">
      //   <h2>Products</h2>
      //   <Slider
      //     ref={setSliderRef}
      //     {...settings}
      //     className="topProdsSlider__main"
      //   >
      //     {brandData?.map((item, index) => {
      //       return (
      //         <div
      //           key={index}
      //           className='topProdsSlider__main__item'
      //         >
      //           <div className="img-block">
      //             <Image
      //               className="img"
      //               height={245}
      //               width={245}
      //               // layout="responsive"
      //               alt={'product'}
      //               objectFit="cover"
      //               src={item.url}
      //               priority={true}
      //             />
      //           </div>
      //           <p className="topProdsSlider__main__item__name">{"example"}</p>
      //           {/* position absolute */}
      //         </div>
      //       )
      //     })}
      //   </Slider>
      //   {brandData?.length ? (
      //     <div className="controls">
      //       <button aria-label="prev-arrow" onClick={sliderRef?.slickPrev}>
      //       <span className="icon-keyboard_arrow_left"></span>

      //       </button>
      //       <button aria-label="next-arrow" onClick={sliderRef?.slickNext}>
      //       <span className="icon-keyboard_arrow_right"></span>
      //       </button>
      //     </div>
      //   ) : (
      //     ''
      //   )}
      // </div>
  )
        }