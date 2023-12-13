import React from 'react'
import { blog } from '../../data/blog'
import './blog.css'

export default function Blog() {
  return (
    <div className='container section blog' id='blog'>
      <h2 className='section--title'>Blog Posts</h2>

      <div className='blog--container grid'>
        {blog.map((blog) => (
          <div className='blog--card' key={blog.id}>
            <div className='blog--thumb'>
              <a href='#'>
                <img src={blog.image} className='blog--image'/>
              </a>
            </div>
            <div className='blog--details'>
              <h3 className='blog--title'>{blog.title}</h3>
              <div className='blog--meta'>
                <span>{blog.date}</span>
                <span className='blog--dot'>.</span>
                <span>{blog.creator}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
