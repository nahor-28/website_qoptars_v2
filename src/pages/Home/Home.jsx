import React from 'react'
import './Home.css'

import { CameraFeatures, CompareSlider, FeatureGroup, Gallery, Hero, Modes, ProFeatures, Promo, Safety, Text1 } from '../../components/index'

const Home = () => {
  return (
    <React.Fragment>
        <Hero />
        <Promo />
        <FeatureGroup />
        <CameraFeatures />
        <Text1 />
        <Gallery />
        <ProFeatures />
        <Modes />
        <Safety />
        <CompareSlider />
    </React.Fragment>
  )
}

export default Home