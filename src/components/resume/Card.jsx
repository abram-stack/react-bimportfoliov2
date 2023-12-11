import React from 'react'
import { CgRadioCheck } from 'react-icons/cg'


export default function Card({ exp }) {
  
    
  return (
    <>
      {exp && (
        <div className='timeline--item'>
          <CgRadioCheck className='timeline--icon'/><span className='timeline--year'>{exp.year}</span>
          <h3 className='timeline--title'>{exp.title}</h3>
          <p className='timeline--text'>{exp.desc}</p>
        </div>
      )}
    </>
  )
}
