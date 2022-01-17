import React from "react";
import "./buy-course-button.scss";
import { NavLink } from "react-router-dom";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const BuyCourseButton = () => {
  const { modalWindow } = useSelector((state) => state.serviceStore);
  const dispatch = useDispatch();

  return (
    <NavLink className="nav-button navlink buyCourseButton" to="/buy">
      <div className="circle">
        <span>Выбрать тариф!</span>
      </div>
    </NavLink>
  );
};

export default BuyCourseButton;
