import React from 'react'
import './Hero.css'
import hero_video from '../../assets/videos/pexels.mp4'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section className='hero_section'>
        <div className='hero_video'>
            <video src={hero_video} loop muted autoPlay />
        </div>
        <div className='hero_text'>
            <h1 className='hero_title'>Airdian</h1>
            <h5 className='hero_subtitle'>Explore. Create.</h5>
            <Button buttonStyle="btn_outline" buttonSize="btn_large">Watch Video</Button>
        </div>
    </section>
  )
}

export default Hero