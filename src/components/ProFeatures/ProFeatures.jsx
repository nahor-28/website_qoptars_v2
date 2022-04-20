import React from 'react'
import { motion } from 'framer-motion'
import './ProFeatures.css'

const ProFeatures = () => {
  return (
    <section className='profeatures_section'>
        <div className=' profeatures'>
            <div className='featureWrapper align_right'>
                <motion.div className='profeature' whileHover={{
                        x: 20,
                        scale: 1.2,
                        color: "#fff",
                        cursor: "pointer",
                        transition: { ease: "easeInOut", duration: 0.09 },
                    }}>
                    <h2>
                        Strong And Rugged
                    </h2>
                    <p>Always ready for action / Any situation . The most rugged made with fully carbon fibre for wall-breaking strength and lightweight.</p>
                </motion.div>
                <motion.div className='profeature' whileHover={{
                        x: 20,
                        scale: 1.2,
                        color: "#fff",
                        cursor: "pointer",
                        transition: { ease: "easeInOut", duration: 0.09 },
                    }}>
                    <h2>Flight Time</h2>
                    <p>The most ideal flight endurance. Airdian re-engineered intelligent li-ion technology gives you 30 minutes of flight time with a single battery.</p>
                </motion.div>
            </div>
            <div className='profeatures_video'>VIDEO</div>
            <div className='featureWrapper align_left'>
                <motion.div className='profeature' whileHover={{
                        x: -20,
                        scale: 1.2,
                        color: "#fff",
                        cursor: "pointer",
                        transition: { ease: "easeInOut", duration: 0.09 },
                    }}>
                    <h2>Internal sensors</h2>
                    <p>State of the art internal sensors that give the most advanced  redundancy improving your flight performance and safety.</p>
                </motion.div>
                <motion.div className='profeature' whileHover={{
                        x: -20,
                        scale: 1.2,
                        color: "#fff",
                        cursor: "pointer",
                        transition: { ease: "easeInOut", duration: 0.09 },
                    }}>
                    <h2>Camera Control</h2>
                    <p>Click, Capture, Switch.. All you need and right where you need. Control your camera right from the remote controller. Switch from video/photo and capture, Click or stop at just a click of a button.</p>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default ProFeatures