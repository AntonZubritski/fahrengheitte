import React from 'react'
import { SmileSvg, LikeSvg, EyeSvg, LineSvg } from '../../svg/svg.jsx'
import CircleButton from '../circle-button/circle-button.jsx'
import SliderCenterMode from '../slider-slick/slider-slick.jsx'
import { base } from '../../base/base.js'
import './about-course.scss'

const AboutCourse = ({ setModalWindow, modalWindow }) => {
  const { texts, title } = base.aboutCourse

  return (
    <div className="about-course">
      <div className='background'>
          <LineSvg />
      </div>

      <div className="text-block">
        <h2>{title}</h2>
        <div>
          {texts[0]}
          <SmileSvg />
        </div>
        <div>{texts[1]}</div>
        <div>
          {texts[2]}
          <LikeSvg />
        </div>
        <div className="btn-group">
          <div>
            <div>Программа курса</div>
            <div className="icon">
              <EyeSvg />
            </div>
          </div>
          <div>
            <div>Записаться на курс</div>
            <div className="icon" onClick={() => setModalWindow(!modalWindow)}>
              <CircleButton color="brown" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="slider">
        <SliderCenterMode />
      </div>
    </div>
  )
}
export default AboutCourse
