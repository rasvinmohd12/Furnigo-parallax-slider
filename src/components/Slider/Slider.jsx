import React from "react";
import sliderCSS from './../Slider/Slider.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'
import 'swiper/css/effect-creative'


import { Autoplay ,EffectCreative , Parallax} from "swiper/modules";


function Slider(){
  return(
      <div className={sliderCSS.sliderWrapper}>
        <Swiper
          slidesPerView={1}
          autoplay={
              {
                delay:1000,
              }
          }

          effect='creative'
          parallax={true}
          loop={true}

          creativeEffect={
            {
              prev:{
                shadow:true,
                translate:[0,0,-400],
              },
              next:{
                translate: ['100%',0,0],
              }
            }
          }

          speed={2000}
          modules={[Autoplay , EffectCreative, Parallax]}

          className={sliderCSS.swiper}>
          <SwiperSlide>
            <div className={`${sliderCSS.slide} ${sliderCSS.slide1}`}>
              <div className={sliderCSS.content}>
                  <p data-swiper-parallax="-300">Furniture Portfolio</p>
                    <h2 data-swiper-parallax="-350">Orange Attraction</h2>
                    <button data-swiper-parallax="-420">explore Now<i className="ri-arrow-right-up-line"></i>
                    
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${sliderCSS.slide} ${sliderCSS.slide2}`}>
              <div className={sliderCSS.content}>
                  <p data-swiper-parallax="-300">Furniture Portfolio</p>
                    <h2 data-swiper-parallax="-350">Darkened Aesthetics</h2>
                    <button data-swiper-parallax="-420">explore Now 
                      
                      <i className="ri-arrow-right-up-line"></i>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${sliderCSS.slide} ${sliderCSS.slide3}`}>
              <div className={sliderCSS.content}>
                  <p data-swiper-parallax="-300">Furniture Portfolio</p>
                    <h2 data-swiper-parallax="-350">Modern Minimalistic</h2>
                    <button data-swiper-parallax="-420"> explore Now 
                      
                      <i className="ri-arrow-right-up-line"></i>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  
              </div>
            </div>
          </SwiperSlide>
        </Swiper>


        <div className={sliderCSS.Social}>
          <i className="ri-facebook-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-github-line"></i>
          <i className="ri-youtube-line"></i>
        </div>
      </div>
  )
}

export default Slider