import React from 'react'
import Card from './card'
import './course-program.scss'

const CourseProgram = () => {
  return (
    <div className="course-program" id='courseProgramm'>
      <div className="title">
        <h2>Программа курса</h2>
        <div>
          <span>12 занятий</span> с видео-лекциями, практическими примерами и
          заданиями
        </div>
        <div>
          попробуйте{' '}
          <span className="background-brown">первое занятие — бесплатное</span>
        </div>
      </div>
      <div className="course-info">
        <ul>
          <li>
            Длительность <p>1 месяц</p>
          </li>
          <li>
            Онлайн <p>удобное время</p>
          </li>
          <li>
            Обучение <p>с практикой</p>
          </li>
          <li>
            Доступ <p>постоянный</p>
          </li>
        </ul>
      </div>

      <Card />
    </div>
  )
}

export default CourseProgram
