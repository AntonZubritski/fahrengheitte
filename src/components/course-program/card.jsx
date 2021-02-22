import React, { useEffect, useState } from 'react'
import './card.scss'
import firebase from 'firebase/app'
import 'firebase/database'


const Card = () => {
  const [courseProgramState, setCourseProgram] = useState([])

  useEffect(() => {
    const db = firebase.database().ref('courseProgram')
    // const courseProgram = db.ref('courseProgram')
    db.on('value', (elem) => setCourseProgram(elem.val()));
  },[])


  const cards = courseProgramState.map((item, key) => {
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
