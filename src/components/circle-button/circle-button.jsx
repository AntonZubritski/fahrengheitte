import React from 'react'
import Arrow from '../arrow/arrow'
import './circle-button.scss'

const CircleButton = ({color}) => {
const colorCircle = `circle-button ${color}`

  return (
    <button className={colorCircle}>
      <Arrow color='white' />
    </button>
  )
}
export default CircleButton
