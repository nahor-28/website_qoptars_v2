import React from 'react'
import './CameraFeatures.css'

const CameraFeatures = () => {

  return (
    <section className='cFeaturesSection' >
        <div className='camerafeatures'>
            <h1>All time legendary camera is with Airdian.</h1>
            <p>GoPro® - The all time people's favourite action camera, trusted for its quality and performance now comes with Airdian. </p>
            <div className='feature_1'>
              <video src='/assets/videos/480p-gopro-4k_2.mp4' autoPlay muted loop></video>
              <div className='feature1_text'>
                <div id='feature1_text1'>4K@60fps</div>
                <div id='feature1_text2'>12MP photos.</div>
              </div>
            </div>
            <div className='feature_2'>
              <video src='/assets/videos/480-gimble.mp4' autoPlay muted loop></video>
              <div className='feature2_text'>
                <div id='feature2_text1'>3-Axis Mechanical Gimbal</div>
                <div id='feature2_text2'>Camera inbuilt hypersmooth stabilisation</div>
              </div>
            </div>
            <div className='feature_3'>
              <video src='/assets/videos/480-DC-angle.mp4' autoPlay muted loop></video>
              <div className='feature3_text'>
                <div id='feature3_text1'>Detachable <br></br> Camera</div>
                <div id='feature3_text2'>Capture all the action even without flying</div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default CameraFeatures