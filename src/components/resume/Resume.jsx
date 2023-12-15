import React from 'react'
import './resume.css'
import Card from './Card';

export default function Resume() {
const experiences = [
  {
    id: 1,
    category: 'education',
    year: '2015 - 2023',
    title: 'Bachelor of Science',
    place: 'Frankfurt University of Applied Science',
    desc: 'Case Study and Thesis: Case study: Conventional website emitted 50 times more carbon emissions than the website with optimization using React, Next.js and other during development.',
  },
  {
    id: 2,
    category: 'education',
    year: '2011 - 2013',
    title: 'International Advanced Diploma in ICT ',
    place:
      'Institute Technology Harapan Bangsa Indonesia, affiliated with Informatics Academy Singapore',
    desc: '',
  },
  {
    id: 3,
    category: 'experience',
    year: '2023 - present',
    title: 'Coding Bootcamp',
    desc: 'Deepening the understanding of web development. Code challenge, Side Projects, Code Review',
  },
  {
    id: 4,
    category: 'experience',
    year: '2022 - 2022',
    title: 'First-Level-Support in IT Department',
    place: ' FraPort FraGround Ground Handling GmbH',
    desc: '',
  },
  {
    id: 5,
    category: 'experience',
    year: '2018 - 2019',
    place:'Indonesia General Consulat',
    title: 'Part of Developer Team Intern',
    desc: 'Gathered user requirements. Analyzed data flow and discussed within the development team. ReactJS and NextJS',
  },
]
  
  const eduEl = experiences.filter(exp => {
    return exp.category === 'education'
  })
  const jobEl = experiences.filter(exp => {
    return exp.category === 'experience'
  })

  return (
    <section className='section container resume' id='resume'>
      <h2 className='section--title'>Experience</h2>

      <div className='resume--container grid'>
        <div className='timeline grid'>
          {eduEl.map((exp) => (
            <Card key={exp.id} exp={exp} />
          ))}
        </div>
        <div className='timeline grid'>
          {jobEl.map((exp) => (
            <Card key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
