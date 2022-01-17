import React, { useState } from 'react'
import './reviews.scss'
import { base } from '../../base/base.js'
import Arrow from '../arrow'
import { ReviewCard } from './'

const Reviews = () => {
  const [count, setCount] = useState(1)
  const [isActive, setActive] = useState('false')

  const { image, text } = base.review

  const incCount = () => {
    setActive(!isActive)
    setTimeout(
      () => (count !== 1 ? setCount(count - 1) : setCount(text.length)),
      400
    )
  }
  const decCount = () => {
    setActive(!isActive)
    setTimeout(
      () => (count !== text.length ? setCount(count + 1) : setCount(1)),
      400
    )
  }

  return (
    <div className="reviews">
      <h2>Отзывы выпускников</h2>

      
        <div className="block block-one">
          <img src={image[0]} alt="img" />
        </div>
        <div className="block block-two">
          <div className="top">
            <img src={image[1]} alt="img" />
          </div>
          <div className="bottom">
            <img src={image[2]} alt="img" />
          </div>
        </div>
        <div className='block block-three'>
          <ReviewCard review={text[count - 1]} isActive={isActive} />
          <div className="arrow-button">
            <div className="prev arrows" onClick={incCount}>
              <Arrow color="brown" />
            </div>
            <span>
              {count}/{text.length}
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
