import React from 'react'
import './burger.scss'

const Burger = ({ burger, setBurger }) => {
  console.log(burger)
  return (
    <div>
      <input
        className="menu-btn"
        type="checkbox"
        onClick={() => setBurger(!burger)}
        id="menu-btn"
      />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
    </div>
  )
}
export default Burger
