import React, { useEffect } from 'react'
import './Promo.css'
import video from '../../assets/videos/pexels2.mp4'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const promoVariants = {
  visible: { opacity: 1,  transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
  hidden: { opacity: 0.2,  transition: { when: 'afterChildren'} }
};

const Promo = () => {

  const [ ref2, inView ] = useInView({ threshold: 0.1 })
  const animation = useAnimation();

  useEffect(() => {
    console.log(inView)
    inView ? animation.start('visible') : animation.start('hidden');
  }, [inView, animation])

  return (
    <section ref={ref2} className='promoSection'>  
          <motion.div className='myContainer promo' variants={promoVariants} initial="hidden" animate={animation} >
                <motion.h1 variants={promoVariants}>Capture the highest quality photos & videos with Airdian.</motion.h1>
                    <motion.p variants={promoVariants}> 
                        It promises Stunning detail, Hypersmooth video, Stability and reliability. 
                        A highly stable drone with rigid body and a GoPro® Hero 7  attached makes aerial videography  and photography a smooth and fun process. 
                        Adding to that, learning how to fly  is so easy that anyone can fly without any prior experience.
                    </motion.p>
           
              <motion.h2 variants={promoVariants}>Time flies, But memories stay. Keep your moments alive forever with Airdian.</motion.h2>
              <motion.video variants={promoVariants} src={video} muted autoPlay loop controls></motion.video>
            </motion.div>
    </section>
  )
}

export default Promo