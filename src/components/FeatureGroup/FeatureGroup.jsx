import React, { useEffect } from 'react'
import './FeatureGroup.css'
 
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

import v_4k from '../../assets/images/features/4k.png';
import battery from '../../assets/images/features/battery-status-full.png'
import liveStreaming from '../../assets/images/features/live-streaming.png';
import axis_3 from '../../assets/images/features/video-camera.png';
import radio from '../../assets/images/features/radio.png';
import easy from '../../assets/images/features/pilot.png';

const featureVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hidden: { opacity: 0, scale: 0 }
};

function FeatureGroup() {
  const [ref1, inView] = useInView({ threshold: 0.3 })
  const animation = useAnimation()

  useEffect(() => {
    inView ? animation.start('visible') : animation.start('hidden')
  }, [inView, animation])

  return (
    <section className='feature_group_section'>
      <div className='container_feature_group'
        ref={ref1}
      >
        <motion.div className='feature_box' initial="hidden" animate={animation} variants={featureVariants}>
          <div className='feature_group_image_container'><img src={v_4k} alt="" /></div>
          <div className='feature_title'>4K@60fps</div>
        </motion.div>
        <motion.div className='feature_box' initial="hidden" animate={animation} variants={featureVariants}>
          <div className='feature_group_image_container'><img src={battery} alt="" /></div>
          <div className='feature_title'>30 Mins Flight Time</div>
        </motion.div>
        <motion.div className='feature_box' initial="hidden" animate={animation} variants={featureVariants}>
          <div className='feature_group_image_container'><img src={liveStreaming} alt="" /></div>
          <div className='feature_title'>Live Video Feed</div>
        </motion.div>
        <motion.div className='feature_box' initial="hidden" animate={animation} variants={featureVariants}>
          <div className='feature_group_image_container'><img src={axis_3} alt="" /></div>
          <div className='feature_title'>3-axis <br /> Gimbal Stabilisation</div>
          {/* <div className='feature_title'>Gimbal Stabilisation</div> */}
        </motion.div>
        <motion.div className='feature_box' initial="hidden" animate={animation} variants={featureVariants}>
          <div className='feature_group_image_container'><img src={radio} alt="" /></div>
          <div className='feature_title'>5 Kms Range</div>
        </motion.div>
        <motion.div className='feature_box' initial="hidden" animate={animation} variants={featureVariants}>
          <div className='feature_group_image_container'><img src={easy} alt="" /></div>
          <div className='feature_title'>Easy To Fly</div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeatureGroup