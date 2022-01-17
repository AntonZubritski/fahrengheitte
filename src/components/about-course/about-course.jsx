import React from "react";
import { SmileSvg, LikeSvg, EyeSvg, LineSvg } from "../../svg/svg.jsx";
import CircleButton from "../circle-button/circle-button.jsx";
import SliderCenterMode from "../slider-slick/slider-slick.jsx";
import { base } from "../../base/base.js";
import "./about-course.scss";

import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const AboutCourse = () => {
  const { texts, title } = base.aboutCourse;

  const { modalWindow  } = useSelector((state) => state.serviceStore)
  const dispatch = useDispatch()

  return (
    <div className="about-course" id='course'>
      <div className="background">
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
            <a href="#course-programm">
              <div className="icon">
                <EyeSvg />
              </div>
            </a>
          </div>
          <div>
            <div>Записаться на курс</div>
            <div className="icon" onClick={() => dispatch(actions.openCloseModal(!modalWindow))}>
              <CircleButton color="brown" />
            </div>
          </div>
        </div>
      </div>

      <div className="slider">
        <SliderCenterMode />
      </div>
    </div>
  );
};
export default AboutCourse;
