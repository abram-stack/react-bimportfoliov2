import React from 'react'
import { testimonials } from '../../data/testimonials'
import './testimonials.css'
import { Pagination} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'


export default function Testimonials() {
  return (
    <div className='container section testimonials'>
      <h2 className='section--title'>Clients and Reviews</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        className='testimonials--container grid'
      >
        {testimonials.map((testi) => (
          <SwiperSlide key={testi.id} className='testimonial--item'>
            <div className='thumb'>
              <img src={testi.image} alt={testi.title} />
            </div>
            <h3 className='testimonial--title'>{testi.title}</h3>
            <span className='subtitle'>{testi.subtitle}</span>
            <div className='comment'>{testi.comment}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
