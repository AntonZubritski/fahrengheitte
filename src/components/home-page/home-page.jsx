import React, {useEffect, useState} from 'react'
import AboutCourse from '../about-course/about-course.jsx'
import AboutMe from '../about-me/about-me.jsx'
import CourseProgram from '../course-program/course-program.jsx'
import Footer from '../footer/footer.jsx'
import FreeMaterials from '../free-materials/free-materials.jsx'
import HeadTitle from '../head-title/head-title.jsx'
import Header from '../header/header.jsx'
import Reviews from '../reviews/reviews.jsx'
import Tariffs from '../tariffs/tariffs.jsx'
import WhatTheCourse from '../what-the-course/what-the-course.jsx'

import firebase from 'firebase/app'
import 'firebase/database'

const HomePage = () => {
  const [modalWindow, setModalWindow] = useState(false);

  return (
    <>
      <Header setModalWindow={setModalWindow} modalWindow={modalWindow} />
      <HeadTitle />
      <AboutCourse setModalWindow={setModalWindow} modalWindow={modalWindow} />
      <WhatTheCourse />
      <AboutMe />
      <CourseProgram />
      <FreeMaterials />
      <Reviews />
      <Tariffs />
      <Footer />
    </>
  )
}
export default HomePage
