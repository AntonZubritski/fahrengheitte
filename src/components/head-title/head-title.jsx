import React, { useState } from "react";
import CircleButton from "../circle-button";
import inst1 from "../../img/inst1.png";
import inst2 from "../../img/inst2.png";
import { LineSvgHeadTitle, PostSvg } from "../../svg/svg";
import "./head-title.scss";

const HeadTitle = () => {
  const [instClass1, setInstClass] = useState(null);

  const instClass = instClass1 ? "inst1 instOnload" : "inst1";
  const coralClass = instClass1 ? "coral-block coralOnload" : "coral-block";

  return (
    <div className="head-title" onLoad={() => setInstClass(true)}>
      <div className="text-block">
        <h1>
          Искусство <span className="color-brown">стильной</span>
          <br /> мобильной фотографии
        </h1>
        <h4>Найди свой стиль фотографии и делись своим видением красоты</h4>
        <h6>
          <span>Посмотреть программу курса</span>
          <a href="#course-programm">
            <div className="icon">
              <CircleButton color="brown" />
            </div>
          </a>
        </h6>
      </div>
      <div className="inst-block">
        <div className={coralClass}></div>
        <img className={instClass} src={inst1} alt="inst1" />
        <img className="inst2" src={inst2} alt="inst2" />
      </div>
      <div className="stamp-block">
        <PostSvg />
      </div>
      <div className="background">
        <LineSvgHeadTitle />
      </div>
    </div>
  );
};
export default HeadTitle;
