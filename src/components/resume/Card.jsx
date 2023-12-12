import React from 'react'
import { IoRibbonOutline } from 'react-icons/io5'



export default function Card({ exp }) {
  
    
  return (
    <>
      {exp && (
        <div className='timeline--item'>
          <IoRibbonOutline className='timeline--icon'/><span className='timeline--year'>{exp.year}</span>
          <h3 className='timeline--title'>{exp.title}</h3>
          <p className='timeline--text'>{exp.desc}</p>
        </div>
      )}
    </>
  )
}
