import React from 'react'
import './Feature.css'

const Feature = ({image, text, shift}) => {
  return (
    <div className='camera_feature'>
        <div className={shift === 'left' ? 'feature_img' : 'feature_img feature_order'}><video src={image} autoPlay muted loop></video></div>
        <div className={shift === 'left' ? 'feature_text align_left' : 'feature_text align_right'}>
            <h1>
                {text[0]}
            </h1>
            
            <h2>
                {text[1]}
            </h2>
        </div>
    </div>
  )
}

export default Feature