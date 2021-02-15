import React from 'react'
import './arrow.scss'

const Arrow = ({ color, width }) => {
  const lineArrow = `line-arrow ${color} ${width}`
  const arrowRight = `arrow right ${color}`

  return (
    <div className='arrow-icon'>
      <i className={lineArrow}></i>
      <i className={arrowRight}></i>
    </div>
  )
}

export default Arrow
