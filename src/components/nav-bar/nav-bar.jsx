import React from 'react'
import { NavLink } from 'react-router-dom'
import NavButton from '../nav-button/nav-button'
import './nav-bar.scss'

const NavBar = ({ burger }) => {
  const classHeader = burger ? 'header-nav display' : 'header-nav'

  return (
    <div className={classHeader}>
      <ul>
        <li>
          <NavLink className="navlink" to="#">
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="#">
            Программа курса
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="#">
            Бесплатные материалы
          </NavLink>
        </li>
        <NavButton /> 
      </ul>

    </div>
  )
}

export default NavBar
