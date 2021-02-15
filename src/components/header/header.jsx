import React, { useState } from 'react'
import Burger from '../burger/burger.jsx'
import Logo from '../logo/logo.jsx'
import NavBar from '../nav-bar/nav-bar.jsx'
import NavButton from '../nav-button/nav-button.jsx'
import './header.scss'

const Header = () => {
  const [burger, setBurger] = useState(false)

  return (
    <div className="header">
      <Logo />
      <NavBar burger={burger} />
      <ul className="ul-button">
        <NavButton burger={burger} />
      </ul>
      <Burger setBurger={setBurger} burger={burger} />
    </div>
  )
}

export default Header
