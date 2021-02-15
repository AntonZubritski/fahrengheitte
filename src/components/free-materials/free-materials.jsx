/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Download } from '../../svg/svg'
import './free-materials.scss'

const FreeMaterials = () => {
  return (
    <div className="free-materials">
      <div className="left-block">
        <div className="bonus">
          <div>Бонус</div>
        </div>

        <h2>Бесплатные материалы</h2>
        <div className="text">
          В этом разделе собраны материалы и статьи, которые будут вам полезны и
          интересны. Изучите их самостоятельно, в дополнение к прохождению
          курса, и результат точно не заставит себя ждать!
        </div>
        <div className="materials-button">
          <div>Скачать материалы</div>
          <div className="icon">
            <Download />
          </div>
        </div>
      </div>
      
        <div className="video-block video-block-width">
        <iframe  src="https://www.youtube.com/embed/xFa2_PVMeDQ" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="video-block-two video-block-width">
        <iframe  src="https://www.youtube.com/embed/xFa2_PVMeDQ" frameBorder="0" allowFullScreen></iframe>
        </div>
      
    </div>
  )
}

export default FreeMaterials
