import React from 'react'
import './review-card.scss'
import { InstagramSvg } from '../../svg/svg'

const ReviewCard = ({review, isActive}) => {
  const { avatar, textReview, inst, name, id } = review
  const classt = 'cards-review fade1'
  const clasb = 'cards-review fade2'

  return (
    <div className={isActive ? clasb : classt}>
      <div className="cards">
        <div className='logo'>
          <img className="photo-circle" src={avatar} alt="phot" />
        </div>
        <div>
          <div className="inst-block icon">
            <InstagramSvg /> <span>{`@${inst}`}</span>
          </div>
          <div>{name}</div>
        </div>
      </div>
      <div className="text-block">
        {textReview.map((text, key) => {
          return (
              <div key={id+key+name}>
                {text}
              </div>
          )
        })}
      </div>
    </div>
  )
}
export default ReviewCard
