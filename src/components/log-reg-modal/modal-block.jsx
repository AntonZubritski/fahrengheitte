import React from "react";
import "./log-reg-modal.scss";
import { LogModal } from "./";
import { RegModal } from "./";
import { useSelector } from 'react-redux'

const ModalBlock = (props) => {
  const { modalWindow, fadeModalSwitch } = useSelector((state) => state.serviceStore)
  

  const classModal = () => {
    if (fadeModalSwitch) {
      return "modal modal-disactive";
    } else if (modalWindow) {
      return "modal modal-active";
    } else {
      return "modal";
    }
  };
  
  return (
    <div className={classModal()}>
      {/* <RegModal />
      <LogModal /> */}
      {props.children}
    </div>
  );
};
export default ModalBlock;
