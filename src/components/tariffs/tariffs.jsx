import React from "react";
import Arrow from "../arrow";
import "./tariffs.scss";
import CircleButton from "../circle-button";
import { base } from "../../base/base.js";
import { PostSvg } from "../../svg/svg.jsx";
import { useState, useEffect, useRef } from "react";

const Tariffs = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const ref = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [x, y]);

  const handleMouse = (e) => {
    setX(e.clientX / window.innerWidth);
    setY(e.clientY / window.innerHeight);
  };

  const divStyle1 = {
    transform: `translate(-${x * 50}px, -${y * 50}px)`,
  };

  const divStyle2 = {
    transform: `translate(${x * 50}px, ${y * 50}px)`,
  };

  return (
    <div className="tarrifs" ref={ref}>
      <div className="block block-one">
        <h2>Тарифы</h2>
        <div className="text">
          Возможность проходить курс по разным условиям. Выберите тариф.
        </div>
        <div className="arrow-line">
          <Arrow color="brown" width="long" />
        </div>
        <div className="post-icon">
          <PostSvg />
        </div>
      </div>
      {base.tariffs.map((item, key) => {
        return (
          <div
            className={!key ? "block block-two" : "block block-three"}
            key={item.title + key}
          >
            <img
              style={!key ? divStyle1 : divStyle2}
              src={item.background}
              alt="Pic"
            />
            <div className="child-block">{item.title}</div>
            <div className="child-block-text">{item.text}</div>
            <div className="child-block-price">
              <span>{item.price}</span>
            </div>
            <div className="child-block">
              <span>Выбрать тариф</span>
              <CircleButton color="black" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Tariffs;
