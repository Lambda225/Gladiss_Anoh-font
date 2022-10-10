import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Cartlivre from './Cartlivre';
// import { livres } from '../../data';
import axios from '../../api/axios';

function Sliderlivre({livres}) {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          livres.splice(0,3).map(liv => {
            return <SwiperSlide key={liv.id} className='flex justify-center items-center '><Cartlivre livre={liv} /></SwiperSlide>
          })
        }
      </Swiper>
    </>
  )
}

export default Sliderlivre