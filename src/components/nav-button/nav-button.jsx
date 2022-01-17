import React from "react";
import { NavLink } from "react-router-dom";
import "./nav-button.scss";

import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const NavButton = () => {
  const { modalWindow } = useSelector((state) => state.serviceStore);
  const { isAuthenticated } = useSelector((state) => state.authStore);
  const dispatch = useDispatch();

  return (
    <li>
      <div
        className="nav-block"
        onClick={() =>
          isAuthenticated
            ? dispatch(actions.logoutUser())
            : dispatch(actions.openCloseModal(!modalWindow))
        }
      >
        <NavLink className="nav-button navlink" to="/home">
          <div className="text">
            {(isAuthenticated && "Выйти") || "Записаться на курс"}
          </div>
          <div className="circle"></div>
        </NavLink>
        <div className="border"></div>
      </div>
    </li>
  );
};

export default NavButton;
