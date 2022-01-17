import React from "react";
import { FacebookSvg, InstagramSvg } from "../../svg/svg";
import Polaroid from "../polaroid/polaroid";
import "./about-me.scss";

const AboutMe = () => {
  return (
    <div className="about-me" id="about-us">
      <div className="left-block">
        <h2>Обо мне</h2>
        <Polaroid />
        <div className="text-block">
          <div>
            ­Привет, я Маша, фотограф и искусствовед, а ещё автор
            образовательного проекта Fahrenheitte.
          </div>
          <div>
            Обучалась в Беларуси, Швеции, Италии и Польше. Являюсь{" "}
            <span>членом Союза фотографов РБ</span>
          </div>
          <div>
            В рамках этого проекта я делюсь своими знаниями в области
            фотографии, живописи и других видов искусства и помогаю вам
            выработать собственный уникальный почерк.
          </div>
          <div className="icon">
            <a href="https://www.instagram.com/" target="_blank">
              <InstagramSvg color="#E5BAA2" />
            </a>
            <a href="https://ru-ru.facebook.com/" target="_blank">
              <FacebookSvg color="#E5BAA2" />
            </a>
          </div>
        </div>
        <div className="background-block"></div>
      </div>
      <div className="right-block">
        <ul>
          <li>
            <span>10+</span> лет опыта в профессиональной фотографии
          </li>
          <li>Побывала в 19 странах и сотнях городов</li>
          <li>
            Публикуюсь в крупнейших СМИ и блогах:
            <span> TUT.бай, aviasales, bestvscobelarus.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
