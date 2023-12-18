import React, { useState } from 'react'
import { projects as data } from '../../data/projects'
import './portfolio.css'

export default function Portfolio() {
  const [projects, setProjects] = useState(data)
  const [type, setType] = useState('')

  // we collect type based from user(set in state ie)
  // type exists? filter the project, => displayedElement
  // render in jsx

  const displayedEl = type
    ? projects.filter((project) => project.category === type)
    : projects
  

  return (
    <div className='container section work' id='portfolio'>
      <h2 className='section--title'>Recent Works</h2>

      <div className='work--filters'>
        <span className='work--item' onClick={() => setType(null)}>
          All
        </span>
        <span className='work--item' onClick={() => setType('LandingPage')}>
          Landing Page
        </span>
        <span className='work--item' onClick={() => setType('WebApp')}>
          WebApp
        </span>
      </div>

      <div className='work--container grid'>
        {displayedEl.map((project) => (
          <div className='work--card' key={project.id}>
            <div className='work--thumbnail'>
              <img
                src={project.image}
                alt={project.title}
                className='work--img'
              />
              <div className='work--mask'></div>
            </div>

            <span className='work--category'>{project.category}</span>
            <h3 className='work--title'>{project.title}</h3>
            <a href={project.link} className='work--button'>
              details
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
