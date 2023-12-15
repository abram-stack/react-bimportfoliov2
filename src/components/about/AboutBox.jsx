import React from 'react'
import { PiCoffee } from 'react-icons/pi'
import { IoLogoReact, IoCodeSlash } from "react-icons/io5";


export default function AboutBox() {
  return (
    <div className='about--boxes grid'>
      <div className='about--box'>
        <PiCoffee className='about--icon' />
        <div>
          <h3 className='about--title'> +9999999</h3>
          <span className='about--subtitle'>Cup of coffee</span>
        </div>
      </div>
      <div className='about--box'>
        <IoCodeSlash className='about--icon'/>
        <div>
          <h3 className='about--title'>+8900</h3>
          <span className='about--subtitle'>Hours of Coding</span>
        </div>
      </div>
      <div className='about--box'>
        <IoLogoReact className='about--icon'/>
        <div>
          <h3 className='about--title'>some</h3>
          <span className='about--subtitle'>Projects</span>
        </div>
      </div>
    </div>
  )
}
