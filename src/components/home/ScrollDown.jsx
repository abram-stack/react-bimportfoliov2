import React from 'react'

export default function ScrollDown() {
  return (
    <div className='scroll--down'>
      <a href='#about' className='mouse--wrapper'>
        <span className='scroll--down-name'>Scroll Down</span>
        <span className='scroll--down-mouse'>
          <span className='scroll--down-wheel'></span>
        </span>
      </a>
    </div>
  )
}
