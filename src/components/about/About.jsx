import React from 'react'
import AboutImg from '../../assets/avatar-2.svg'
import './about.css'
import AboutBox from './AboutBox'
import htmlIcon from '../../assets/htmlIcon.png'

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
              front end (at least for now 🤙🏾). I just finished pursuing my
              Computer Science Bachelor Degree at Frankfurt University Of
              Applied Sciences, in Frankfurt, Germany. I worked on my Bachelor
              Thesis with the sustainability aspects of developing websites with
              help of frontend frameworks.
            </p>
            <a href='https://brambimo.netlify.app/' className='btn'>
              My Resume
            </a>
          </div>

          {/* TODO: transform div parent to Swiper, 
          each item to SwiperSlide  */}
          <div className='about--skills grid'>
            <h2>Tech Stack</h2>

            <div className='skills--item'>
              <div>
                <img src={htmlIcon} />
              </div>
              <h3>HTML</h3>
                <span className='subtitle'>2 years</span>
            </div>
            
            <div className='skills--item'>
              <div>
                <img src={htmlIcon} />
              </div>
              <h3>CSS</h3>
                <span className='subtitle'>2 years</span>
            </div>
            {/* <div className='skills--data'>
              <div className='skills--titles'>
                <h3 className='skills--name'>Development</h3>
                <span className='skills--number'>90%</span>
              </div>
              <div className='skills--bar'>
                <span className='skills--year development'></span>
              </div>
            </div>

            <div className='skills--data'>
              <div className='skills--titles'>
                <h3 className='skills--name'>UI/UX Design</h3>
                <span className='skills--number'>70%</span>
              </div>
              <div className='skills--bar'>
                <span className='skills--year design'></span>
              </div>
            </div>

            <div className='skills--data'>
              <div className='skills--titles'>
                <h3 className='skills--name'>Analytics</h3>
                <span className='skills--number'>80%</span>
              </div>
              <div className='skills--bar'>
                <span className='skills--year analytics'></span>
              </div>
            </div>
             */}
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}
