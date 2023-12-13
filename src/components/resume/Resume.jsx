import React from 'react'
import './resume.css'
import Card from './Card';

export default function Resume() {
const experiences = [
  {
    id: 1,
    category: "education",
    year: "2019 - present",
    title: "Academic Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 2,
    category: "education",
    year: "2013 - 2017",
    title: "Bachelor's Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 3,
    category: "education",
    year: "2009 - 2013",
    title: "Honours Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 4,
    category: "experience",
    year: "2019 - present",
    title: "Web Designer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 5,
    category: "experience",
    year: "2013 - 2017",
    title: "Front-End Developer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 6,
    category: "experience",
    year: "2009 - 2013",
    title: "Back-End Developer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
];
  
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
