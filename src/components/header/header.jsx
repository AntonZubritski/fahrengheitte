import React, { useState } from "react";
import Burger from "../burger";
import { ModalBlock, RegModal, LogModal } from "../log-reg-modal";
import Logo from "../logo";
import NavBar from "../nav-bar";
import NavButton from "../nav-button";
import "./header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const { modalWindow } = useSelector((state) => state.serviceStore);

  return (
    <>
      <div className="header">
        <Logo />
        <NavBar burger={burger} />
        <ul className="ul-button">
          <NavButton />
        </ul>
        <Burger setBurger={setBurger} burger={burger} />
      </div>
      {modalWindow && (
        <ModalBlock>
          <RegModal />
          <LogModal />
        </ModalBlock>
      )}
    </>
  );
};

export default Header;
