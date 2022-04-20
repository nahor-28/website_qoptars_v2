import React from 'react'
import './Safety.css'

const Safety = () => {
  return (
    <section className='safety_section'>
        <div className='myContainer safety_container'>
            <h1>Safety First</h1>
            <h2>3 Levels Of Safety</h2>
            <p>While performing a tremendous job, Our main focus is always yours and the drone's safety.  Airdian has 3 levels of safety features that keeps you safe from losing control while the drone is in the air or crashing your drone due to low battery or any kind of internal error. Keep yourself, Others and the drone safe while flying without any extra care.</p>
            <p>3 level of safety is integrated in Airdian, Your drone will return back to it's take off position in the below 3 conditions :</p>
            <div className='safety_feature_container'>
                <div className='safety_feature'>
                    <img src="/assets/images/gallery/01.jpg" alt="" />
                    <div className='safety_feature_text'>
                        <p>Return to home in case of low battery</p>
                        <p>(Battery percentage 20%)</p>
                    </div>
                </div>
            </div>
            <div className='safety_feature_container'>
                <div className='safety_feature'>
                    <img src="/assets/images/gallery/02.jpg" alt="" />
                    <div className='safety_feature_text'>
                        <p>Return to home incase of Loss control from pilot</p>
                        <p>(Communication lost)</p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Safety