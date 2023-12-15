import React from 'react'
import AboutImg from '../../assets/avatar.jpg'
import './about.css'
import AboutBox from './AboutBox'
import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import { tech } from '../../data/tech'

export default function About() {
  return (
    <section className='container about section' id='about'>
      <h2 className='section--title'>About Me</h2>

      <div className='about--container grid'>
        <img src={AboutImg} alt='' className='about--img' />

        <div className='about--data grid'>
          <div className='about--info'>
            <p className='about--description'>
              Hey my name is Bram and I'm web developer passionate about the
              front end (at least for now 🤙🏾). <br />I just finished pursuing my
              Computer Science Bachelor Degree at Frankfurt University Of
              Applied Sciences, in Frankfurt, Germany. I worked on my Bachelor
              Thesis with the sustainability aspects of developing websites with
              help of frontend frameworks 🌿.
            </p>
            <a href='https://brambimo.netlify.app/' className='btn'>
              My Resume
            </a>
          </div>

          <div className='about--tech'>
            <h2>Tech Stack</h2>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={true}
              grabCursor={true}
              className='about--skills grid'
            >
              {tech.map((tech) => (
                <SwiperSlide className='skills--item' key={tech.id}>
                  <div className='thumb'>
                    <img src={tech.image} />
                  </div>
                  <h3>{tech.title}</h3>
                  <div className='grid tech--info '>
                    {tech.tags.map((tag, index) => (
                      <span key={index} className='tech'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}
