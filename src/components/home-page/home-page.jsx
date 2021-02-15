import React from 'react'
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

const HomePage = () => {
  return (
    <>
      <Header />
      <HeadTitle />
      <AboutCourse />
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
