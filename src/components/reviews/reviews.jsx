import React, { useState } from 'react'
import './reviews.scss'
import { base } from '../../base/base.js'
import Arrow from '../arrow/arrow'
import ReviewCard from './review-card.jsx'

const Reviews = () => {
  const [count, setCount] = useState(1)
  const [isActive, setActive] = useState('false')

  const { review } = base

  const incCount = () => {
    setActive(!isActive)
    setTimeout(
      () => (count !== 1 ? setCount(count - 1) : setCount(review.length)),
      400
    )
  }

  const decCount = () => {
    setActive(!isActive)
    setTimeout(
      () => (count !== review.length ? setCount(count + 1) : setCount(1)),
      400
    )
  }

  return (
    <div className="reviews">
      <h2>Отзывы выпускников</h2>

      
        <div className="block block-one">
          <img src={review[count - 1].img[0]} alt="img" />
        </div>
        <div className="block block-two">
          <div className="top">
            <img src={review[count - 1].img[1]} alt="img" />
          </div>
          <div className="bottom">
            <img src={review[count - 1].img[2]} alt="img" />
          </div>
        </div>
        <div className='block block-three'>
          <ReviewCard review={review[count - 1]} isActive={isActive} />
          <div className="arrow-button">
            <div className="prev arrows" onClick={incCount}>
              <Arrow color="brown" />
            </div>
            <span>
              {count}/{review.length}
            </span>
            <div className="next arrows" onClick={decCount}>
              <Arrow color="brown" />
            </div>
          </div>
       
      </div>
    </div>
  )
}

export default Reviews
