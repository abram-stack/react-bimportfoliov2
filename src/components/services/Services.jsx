import React from 'react'
import './services.css'
import Service1 from '../../assets/service-1.svg'
import Service2 from '../../assets/service-2.svg'
import Service3 from '../../assets/service-3.svg'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'UI/UX design',
      image: Service1,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora consequuntur natus aperiam accusamus. Aut, recusandae.',
    },
    {
      id: 2,
      title: 'Web Development',
      image: Service2,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora consequuntur natus aperiam accusamus. Aut, recusandae.',
    },
    {
      id: 3,
      title: 'Analysis',
      image: Service3,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora consequuntur natus aperiam accusamus. Aut, recusandae.',
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
