import React from "react";
import "./polaroid.scss";
import photo from "../../img/mask-photo.png";
import polaroid from "../../img/polaroid.png";

const Polaroid = () => {
  // const divStyle1 = {
  //   transform: `translate(-${x * 50}px, -${y * 50}px)`,
  // };

  // const divStyle2 = {
  //   transform: `translate(${x * 50}px, ${y * 50}px)`,
  // };

  return (
    <div className="polaroid">
      <img className="photo" src={photo} alt="inst" />
      <img className="polaroid-back" src={polaroid} alt="polaroid" />
    </div>
  );
};
export default Polaroid;
