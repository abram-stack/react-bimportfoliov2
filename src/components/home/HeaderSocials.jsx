import React from 'react'
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

export default function HeaderSocials() {
  return (
    <div className='home--socials'>
      <a href='#' className='home--social-link' target='_blank'><IoLogoLinkedin/></a>
      <a href='#' className='home--social-link' target='_blank'><IoLogoTwitter/></a>
      <a href='#' className='home--social-link' target='_blank'><IoLogoGithub/></a>
    </div>
  )
}
