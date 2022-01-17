import React from "react";
import HeaderFooterWrapper from "../header-footer-wrapper";
import { Card } from "../course-program";
import "./useful-links.scss";
import { base } from "../../base/base.js";

const UsefulLinks = () => {
  const { userfulLinks } = base;

  return (
    <HeaderFooterWrapper>
      <div className="links-card">
        <div className="title">
          <h2>Полезные материалы</h2>
        </div>
        <Card list={userfulLinks} />
      </div>
    </HeaderFooterWrapper>
  );
};

export default UsefulLinks;
