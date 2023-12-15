import React from 'react'
import './services.css'
import Service1 from '../../assets/design.png'
import Service2 from '../../assets/code.png'
// import Service3 from '../../assets/service-3.svg'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Software Design',
      image: Service1,
      description:
        'Having deep understanding how important products User Experience is, I design products not only for the User Interface but also how the user interacts with the products, so people can have the joy using it. I strive to build software with design patterns.',
    },
    {
      id: 2,
      title: 'Web Development',
      image: Service2,
      description: 'With the experiences and knowledge I gathered in University, I try to write clean, re-usable code. Follow the core concept, algorithm principal',
    },
  ]

  return (
    <section className='section container services' id='services'>
      <h2 className='section--title'>Services</h2>

      <div className='services--container grid'>
        {services.map(service => (
          <div className='services--card' key={service.id}>
            <img src={service.image} className='services--image'/>
            <h3 className='services--title'>{service.title}</h3>
            <p className='services--description'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
