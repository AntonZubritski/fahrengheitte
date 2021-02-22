import React, { useState } from "react";
import Burger from "../burger/burger.jsx";
import LogReg from "../log-reg-modal/log-reg-modal.jsx";
import Logo from "../logo/logo.jsx";
import NavBar from "../nav-bar/nav-bar.jsx";
import NavButton from "../nav-button/nav-button.jsx";
import "./header.scss";

const Header = ({ setModalWindow, modalWindow }) => {
  const [burger, setBurger] = useState(false);

  console.log(modalWindow, "modalWindow");
  return (
    <>
      <div className="header">
        <Logo />
        <NavBar
          burger={burger}
          setModalWindow={setModalWindow}
          modalWindow={modalWindow}
        />
        <ul className="ul-button">
          <NavButton
            setModalWindow={setModalWindow}
            modalWindow={modalWindow}
          />
        </ul>
        <Burger setBurger={setBurger} burger={burger} />
      </div>
      {modalWindow ? (
        <LogReg setModalWindow={setModalWindow} modalWindow={modalWindow} />
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
