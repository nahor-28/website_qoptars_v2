import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className="slider">
    <div className="slider-track">
      <div className="slide"><img src="/assets/images/gallery/01.jpg" alt="g-1"/></div>
      <div className="slide"><img src="/assets/images/gallery/02.jpg" alt="g-2"/></div>
      <div className="slide"><img src="/assets/images/gallery/03.jpg" alt="g-3"/></div>
      <div className="slide"><img src="/assets/images/gallery/04.jpg" alt="g-4"/></div>
      <div className="slide"><img src="/assets/images/gallery/05.jpg" alt="g-5"/></div>
      <div className="slide"><img src="/assets/images/gallery/06.jpg" alt="g-6"/></div>
      <div className="slide"><img src="/assets/images/gallery/07.jpg" alt="g-7"/></div>
      {/* <div className="slide"><img src="/assets/images/gallery/07.jpg" alt="g-7"/></div> */}
      <div className="slide"><img src="/assets/images/gallery/06.jpg" alt="g-6"/></div>
      <div className="slide"><img src="/assets/images/gallery/05.jpg" alt="g-5"/></div>
      <div className="slide"><img src="/assets/images/gallery/04.jpg" alt="g-4"/></div>
      <div className="slide"><img src="/assets/images/gallery/03.jpg" alt="g-3"/></div>
      <div className="slide"><img src="/assets/images/gallery/02.jpg" alt="g-2"/></div>
      <div className="slide"><img src="/assets/images/gallery/01.jpg" alt="g-1"/></div>
    </div>
  </div>
  )
}

export default Gallery