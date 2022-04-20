import React, { useRef, useState } from 'react'
import test0 from '../../assets/images/features/non_hdr.jpg'
import test1 from '../../assets/images/features/hdr.jpg'
import './Slider.css'

import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const Slider = () => {

    const [isWidth, setIsWidth] = useState('')
    const [isLeft, setIsLeft] = useState('')
    const [dragging, setDragging] = useState(false);

    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const handleRef = useRef(null);

    const handleMouseMove = (e) => {
        const sliderLeftX = containerRef.current.offsetLeft;
        const sliderHandleWidth = handleRef.current.clientWidth;
        const sliderWidth = containerRef.current.clientWidth;
        let mouseX = (e.clientX - sliderLeftX);
        
        // console.log(sliderLeftX)
        // console.log(mouseX)
        // console.log(sliderHandleWidth)
        // console.log(sliderWidth)
        // console.log(click)
        
        if(dragging) {
            const valueWidth = (1 - mouseX/sliderWidth) * 100;
            const valueLeft = `calc(${(mouseX/sliderWidth) * 100}% - ${sliderHandleWidth/2}px)`
            setIsWidth(valueWidth)
            setIsLeft(valueLeft)

        }

        console.log(mouseX)
        console.log(dragging)
    }


  return (
    <section className='compare_section'>
        <div className='slider_container' ref={containerRef}  onMouseMove={handleMouseMove} onMouseLeave={() => setDragging(false)}> 
            <img src={test0} alt=''></img>
            <div className='image_wrapper' ref={wrapperRef} style={{width: isWidth + '%'}}>
                <img src={test1} alt=''></img>
                <span className='label label_after'>HDR</span>
            </div>
            <span className='label label_before'>NON-HDR</span>
            <div className='handle' ref={handleRef} style={{left: isLeft}} onMouseDown={() => setDragging(true)}  onMouseUp={() => setDragging(false)}>
                <div className='handle_line'></div>
                <div className='handle_circle'>
                    <MdArrowBackIosNew color='#222'/>
                    <MdArrowForwardIos color='#222'/>
                </div>
                <div className='handle_line'></div>
            </div>

        </div>
    </section>
  )
}

export default Slider