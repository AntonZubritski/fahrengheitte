import React from "react";
import "./header-footer-wrapper.scss";
import Header from "../header";
import Footer from "../footer";

const HeaderFooterWrapper = (props) => {
  return (
    <div className="fade-page">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
export default HeaderFooterWrapper;
