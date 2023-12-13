import React from 'react'
import { PiCoffee } from 'react-icons/pi'
import { IoLogoReact } from "react-icons/io5";

export default function AboutBox() {
  return (
    <div className='about--boxes grid'>
      <div className='about--box'>
        <PiCoffee className='about--icon' />
        <div>
          <h3 className='about--title'> +9999</h3>
          <span className='about--subtitle'>Cup of coffee</span>
        </div>
      </div>
      <div className='about--box'>
        <IoLogoReact className='about--icon'/>
        <div>
          <h3 className='about--title'>16</h3>
          <span className='about--subtitle'>Projects</span>
        </div>
      </div>
      <div className='about--box'>
        <IoLogoReact className='about--icon'/>
        <div>
          <h3 className='about--title'>16</h3>
          <span className='about--subtitle'>Projects</span>
        </div>
      </div>
    </div>
  )
}
