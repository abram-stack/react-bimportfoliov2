import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className='container section contact' id='contact'>
      <h2 className='section--title'>Get in touch</h2>

      <div className='contact--container grid'>
        <div className='contact--info'>
          <h3 className='contact--title'>Let's Connect</h3>
          <p className='contact--details'>Send me Email </p>
        </div>

        <form className='contact--form'>
          <div className='contact--form-group'>
            <div className='contact--form-div'>
              <input
                type='text'
                className='contact--form-input'
                placeholder='insert your name'
              />
            </div>
            <div className='contact--form-div'>
              <input
                type='email'
                className='contact--form-input'
                placeholder='insert your email'
              />
            </div>
          </div>

          <div className='contact--form-div'>
            <input
              type='text'
              className='contact--form-input'
              placeholder='insert your subject'
            />
          </div>
          <div className='contact--form-div contact--form-textarea'>
            <textarea
              className='contact--form-input'
              cols='50'
              rows='10'
              placeholder='write your message'
            ></textarea>
          </div>

          <button className='btn'>Send Message</button>
        </form>
      </div>
    </div>
  )
}
