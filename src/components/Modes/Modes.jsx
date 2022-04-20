import React, { useState } from 'react'
import './Modes.css'

import i1 from '../../assets/images/modes/001.jpg'
import i2 from '../../assets/images/modes/002.jpg'
import i3 from '../../assets/images/modes/003.jpg'
import i4 from '../../assets/images/modes/004.jpg'
import i5 from '../../assets/images/modes/005.jpg'
import i6 from '../../assets/images/modes/006.jpg'

const Modes = () => {
    const images = [i1, i2, i3, i4, i5, i6]
    const [slide, setSlide] = useState(0)

  return (
    <section className='modes_section'>
      <div className='modes_container'>
          <h1>Eat. Sleep. Fly. Repeat.</h1>
          <p>Smart flight modes for smart pilots.</p>
          <div className='mode_image_container'>
              <img src={images[slide]} alt=''></img>
          </div>
              <div className='modes_button_container'>
                  <button onClick={() => {setSlide(0)}}>Fly / Land</button>
                  <button onClick={() => {setSlide(1)}}>Orbit</button>
                  <button onClick={() => {setSlide(2)}}>Hold</button>
                  <button onClick={() => {setSlide(3)}}>RTH</button>
                  <button onClick={() => {setSlide(4)}}>WayPoints</button>
              </div>
      </div>
    </section>
  )
}

export default Modes