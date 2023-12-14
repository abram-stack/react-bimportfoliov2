import React from 'react'
import './home.css'
import profileMe from '../../assets/avatar-1.svg' 
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

export default function Home() {
  return (
    <section>
      <div className='container home' id='home'>
        <div className='intro'>
          <img
            src={profileMe}
            alt='bim profile picture smiling'
            className='home--img'
          />
          <h1 className='home--name'>Bram Bimo</h1>
          <span className='home--info'>I'm a Frontend Explorer</span>
          <span className='home--hook'>
            Just scratched the surface of the Web Dev world, amazed and heading
            forward to discover the rest of the web dev world.
          </span>

          <HeaderSocials />

          {/* <a href='#contact' className='btn'>
            Hire Me
          </a> */}

          <ScrollDown />
        </div>
        <Shapes />
      </div>
    </section>
  )
}
