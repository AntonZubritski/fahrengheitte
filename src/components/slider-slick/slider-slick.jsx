import React, { useRef } from 'react'
import Slider from 'react-slick'
import Arrow from '../arrow'
import slide1 from '../../img/slide1.png'
import slide2 from '../../img/slide2.png'
import slide3 from '../../img/slide3.png'
import './slider-slick.scss'

const SliderCenterMode = () => {
  const sliderRef = useRef()

  const goToNext = () => {
    sliderRef.current.slickNext()
  }
  const goToPrev = () => {
    sliderRef.current.slickPrev()
  }
  const settings = {
    className: 'slider',
    infinite: true,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: window.screen.width <= 500 ? 2 : 2.11,
    speed: 500,
  }

console.log(window.screen.width <= 500 ? 'true' : 'false',);
  return (
    <div className="carousel-block">
      <Slider {...settings} ref={sliderRef}>
        <div className="slide1">
          <img className="inst1" src={slide1} alt="inst1" />
        </div>
        <div className="slide2">
          <img className="inst1" src={slide2} alt="inst1" />
        </div>
        <div className="slide3">
          <img className="inst1" src={slide3} alt="inst1" />
        </div>
        <div className="slide4">
          <img className="inst1" src={slide2} alt="inst1" />
        </div>
      </Slider>
      <div className="btn-group">
        <div className="btn prev" onClick={goToPrev}>
          <Arrow color="brown" />
        </div>
        <div className="btn next" onClick={goToNext}>
          <Arrow color="brown" />
        </div>
      </div>
    </div>
  )
}
export default SliderCenterMode
