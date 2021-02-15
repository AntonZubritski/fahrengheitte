import React from 'react'
import Arrow from '../arrow/arrow'
import CircleButton from '../circle-button/circle-button'
import './tariffs.scss'
import { PostSvg } from '../../svg/svg.jsx'

const Tariffs = () => {
  return (
    <div className="tarrifs">
      <div className="block block-one">
        <h2>Тарифы</h2>
        <div className="text">
          Возможность проходить курс по разным условиям. Выберите тариф.
        </div>
        <div className="arrow-line">
          <Arrow color="brown" width="long" />
        </div>
        <div className="post-icon">
          <PostSvg />
        </div>
      </div>
      <div className="block block-two">
        <div className='child-block'>Основной</div>
        <div className='child-block'>
          <span>Выбрать тариф</span>
          <CircleButton color="black" />
        </div>
      </div>
      <div className="block block-three">
        <div className='child-block'>Продвинутый</div>

        <div className='child-block'>
          <span>Выбрать тариф</span>
          <CircleButton color="black" />
        </div>
      </div>
    </div>
  )
}
export default Tariffs
