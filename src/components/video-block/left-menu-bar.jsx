import React from "react";
import "./video-block.scss";
import { base } from "../../base/base.js";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";

const LeftMenuBar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { toggle } = useSelector((state) => state.serviceStore);
  const { paidTarifs } = useSelector((state) => state.userStore);

  const { courseProgram } = base;

  const classToggle = toggle ? "toggle active" : "toggle";
  const classBlockOne = toggle ? "block-one active" : "block-one";

  const menuItem = courseProgram.map((item, key) => {
    const { id, title } = item;
    return (
      <li
        key={id + key}
        onClick={() => {
          dispatch(actions.choiceLesson(id));
          history.push(`${id}`);
        }}
      >
        <div>{`${id}.`}</div> <div>{`${title}`}</div>
      </li>
    );
  });

  return (
    <div className={classBlockOne}>
      <div className="toggle-menu">
        <a
          className={classToggle}
          onClick={() => dispatch(actions.setToggle(!toggle))}
        >
          <i></i>
        </a>
      </div>
      <ul>
        {paidTarifs ? menuItem : menuItem[0]}
      </ul>
    </div>
  );
};

export default LeftMenuBar;
