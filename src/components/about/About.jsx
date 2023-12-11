import React from 'react'
import AboutImg from '../../assets/avatar-2.svg'
import './about.css'
import AboutBox from './AboutBox'

export default function About() {
  return (
    <section className='container about section' id='about'>
      <h2 className='section--title'>About Me</h2>

      <div className='about--container grid'>
        <img src={AboutImg} alt='' className='about--img' />

        <div className='about--data grid'>
          <div className='about--info'>
            <p className='about--description'>
              Hey my name is Bram. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Atque mollitia cum accusantium dicta voluptates
              sunt debitis, quidem facere soluta? Vel?
            </p>
            <a href='' className='btn'>
              Download CV{' '}
            </a>
          </div>

          <div className='about--skills grid'>
            <div className='skills--data'>
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
          </div>
        </div>
        
      </div>

      <AboutBox/>
    </section>
  )
}
