import React from 'react'
import './Achievements.scss'
import cert  from '../../assets/templateImg/certificates/cert.png'
import gmt  from '../../assets/templateImg/certificates/GMT.png'
import nn  from '../../assets/templateImg/certificates/NN.png'
import py  from '../../assets/templateImg/certificates/python.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Achievements = () => {
  return (
    <section id="education">
      <h5>My Achievements</h5>
      <h2>Achievements</h2>
      <h5 className='swipe'> <AiOutlineDoubleLeft/> <span>Swipe</span>    <AiOutlineDoubleRight/></h5>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={70}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       className='container achievements_cont'
    >
      
    <div className="my_slide">
       
        <SwiperSlide className='certi_slide'>
          
          <div className="image"><img src={cert} alt="" /></div>
          {/* <h5>Introduction to Java</h5> */}
        </SwiperSlide>
        <SwiperSlide>

          <div className="image"><img src={gmt} alt="" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image"><img src={nn} alt="" /></div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="image"><img src={py} alt="" /></div>

        </SwiperSlide>
      </div>
    </Swiper>
    </section>
  )
}

export default Achievements
