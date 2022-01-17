import React, { useEffect } from "react";
import AboutCourse from "../about-course";
import AboutMe from "../about-me";
import { CourseProgram } from "../course-program";
import FreeMaterials from "../free-materials";
import HeadTitle from "../head-title";
import { Reviews } from "../reviews";
import Tariffs from "../tariffs";
import WhatTheCourse from "../what-the-course";
import HeaderFooterWrapper from "../header-footer-wrapper";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { isAuthenticated } = useSelector((state) => state.authStore);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push(`/`);
    }
  }, [isAuthenticated]);

  return (
    <HeaderFooterWrapper>
      <HeadTitle />
      <AboutCourse />
      <WhatTheCourse />
      <AboutMe />
      <CourseProgram />
      <FreeMaterials />
      <Reviews />
      <Tariffs />
    </HeaderFooterWrapper>
  );
};
export default HomePage;
