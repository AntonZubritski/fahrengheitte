import React from "react";
import { NavLink } from "react-router-dom";
import "./nav-button.scss";

const NavButton = ({setModalWindow, modalWindow}) => {
  return (
    <li>
      <div className="nav-block" onClick={() => setModalWindow(!modalWindow)}>
        <NavLink className="nav-button navlink" to="#">
          <div className="text">Записаться на курс</div>
          <div className="circle"></div>
        </NavLink>
      </div>
    </li>
  );
};

export default NavButton;
