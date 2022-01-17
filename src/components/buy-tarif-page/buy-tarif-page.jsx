import React from "react";
import Tariffs from "../tariffs/tariffs.jsx";
import HeaderFooterWrapper from "../header-footer-wrapper";

import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const BuyTarifPage = () => {
  const { modalWindow } = useSelector((state) => state.serviceStore);
  const dispatch = useDispatch();

  return (
    <HeaderFooterWrapper>
      <Tariffs />
    </HeaderFooterWrapper>
    
  );
};

export default BuyTarifPage;
