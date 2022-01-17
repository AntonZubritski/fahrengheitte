import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import NavButton from "../nav-button";
import "./nav-bar.scss";

const NavBar = ({ burger }) => {
  const { isAuthenticated, user } = useSelector((state) => state.authStore)
  const { emailVerified } = user;
  
  const classHeader = burger ? "header-nav display" : "header-nav";

  return (
    <div className={classHeader}>
      {!isAuthenticated ? (
        <ul>
        <li>
          <a className="navlink" href="/home#about-us">
            О нас
          </a>
          <div className='border'></div>
        </li>
        <li>
        
          <a className="navlink" href="/home#course">
            Программа курса
          </a>
          <div className='border'></div>
        </li>
        <li>
          <a className="navlink" href="/home#free">
            Бесплатные материалы
          </a>
          <div className='border'></div>
        </li>
        <NavButton />
      </ul>
      ) : emailVerified ? (
        <ul>
        <li>
          <NavLink className="navlink" to="/lessons/1">
          Уроки
          </NavLink>
          <div className='border'></div>
        </li>
        <li>
          <NavLink className="navlink" to="/utility">
          Полезные материалы
          </NavLink>
          <div className='border'></div>
        </li>
        <li>
          <NavLink className="navlink" to="/example">
          Примеры
          </NavLink>
          <div className='border'></div>
        </li>
        <li>
          <NavLink className="navlink" to="/buy">
          Купить урок
          </NavLink>
          <div className='border'></div>
        </li>
        <NavButton />
      </ul>
      ) : null}
      
    </div>
  );
};

export default NavBar;