import React from 'react'
import Logo from '../../assets/logo.svg'
import './sidebar.css'

import {
  IoHomeOutline,
  IoFingerPrint,
  IoDesktopOutline,
  IoCodeSlashOutline,
  IoMailOutline,
  IoRibbonOutline,
} from 'react-icons/io5'

export default function Sidebar() {
  return (
    <aside className='aside'>
      <a href='#home' className='nav-logo'>
        <img src={Logo} alt='logo Bim' />
      </a>

      <nav className='nav'>
        <div className='nav--menu'>
          <ul className='nav--list'>
            <li className='nav--item'>
              <a href='#home' className='nav--link'><IoHomeOutline/></a>
            </li>
            <li className='nav--item'>
              <a href='#about' className='nav--link'><IoFingerPrint/></a>
            </li>
            <li className='nav--item'>
              <a href='#service' className='nav--link'><IoDesktopOutline/></a>
            </li>
            <li className='nav--item'>
              <a href='#resume' className='nav--link'><IoRibbonOutline/></a>
            </li>
            <li className='nav--item'>
              <a href='#projects' className='nav--link'><IoCodeSlashOutline/></a>
            </li>
            <li className='nav--item'>
              <a href='#contact' className='nav--link'><IoMailOutline/></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='nav-footer'>
        <span className='copyright'>&copy; Bram Bimo 2023 </span>
      </div>

    </aside>
  )
}
 