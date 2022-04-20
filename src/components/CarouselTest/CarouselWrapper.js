import React from 'react'
import CarouselTest from './CarouselTest'

const CarouselWrapper = () => {
  return (
    <div style={{  marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <CarouselTest
                show={3}
                infiniteLoop
            >
                <div>
                    <div style={{padding: 2}}>
                        <img src="assets/images/gallery/01.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="assets/images/gallery/02.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="assets/images/gallery/03.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="assets/images/gallery/04.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="assets/images/gallery/05.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="assets/images/gallery/06.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="assets/images/gallery/07.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </CarouselTest>
        </div>
  )
}

export default CarouselWrapper