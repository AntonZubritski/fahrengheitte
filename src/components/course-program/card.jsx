import React from 'react'
import './card.scss'
import { base } from '../../base/base.js'

const Card = () => {
  const { courseProgram } = base

  const cards = courseProgram.map((item, key) => {
    return (
      <div className={`card${item.id}`} key={key + item.id}>
        <div className="title-group">
          <div className='title-text'>
            <div className='bold'>{item.id}.</div>
            <div className='thin'>{item.title}</div>
          </div>
          <span className="free">{item.id === 1 ? 'free' : null}</span>
        </div>
        <div className="detail-info">
          <ul>
            {item.texts.map((text, key) => {
              return <li key={item.id + key}>{text}</li>
            })}
          </ul>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="course-cards">{cards}</div>
    </>
  )
}

export default Card
