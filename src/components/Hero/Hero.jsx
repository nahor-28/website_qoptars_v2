import React, { useEffect } from 'react'
import './Hero.css'
import hero_video from '../../assets/videos/pexels.mp4'
import Button from '../Button/Button'
import { motion, useAnimation } from 'framer-motion'
import {  useInView } from 'react-intersection-observer'

const heroVariants = {
  visible: { opacity: 1, transition: { duration: 2.5 }},
  hidden: { opacity: 0 }
}

const Hero = () => {

  const [ ref, inView ] = useInView({ threshold: 0.5 })
  const animation = useAnimation()

  useEffect(() => {
    inView ? animation.start('visible') : animation.start('hidden')
  }, [inView, animation])

  return (
    <section className='hero_section' ref={ref}>

            <video src={hero_video} loop muted autoPlay />

        <motion.div className='hero_text'
          initial='hidden'
          animate={animation}
          variants={heroVariants}
        >
            <h1 className='hero_title'>Airdian</h1>
            <h5 className='hero_subtitle'>Explore. Create.</h5>
            <Button buttonStyle="btn_outline" buttonSize="btn_large">Watch Video</Button>
        </motion.div>
    </section>
  )
}

export default Hero