import React from "react";
import "./log-reg-modal.scss";
import { FormLineLogin } from "./";
import { FormLineUserInfo } from "./";
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const RegModal = () => {
  const { userInputInfo, switchModalForm, fadeModalSwitch } = useSelector((state) => state.serviceStore)
  const dispatch = useDispatch()

  return (
    <div
      className={switchModalForm ? "modal-block-switch2" : "modal-block-switch"}
    >
      <div
        className="title-modal"
        onClick={() => dispatch(actions.switchModalForm())}
      >
        Регистрация
      </div>

      {!switchModalForm && (
        <>
          <form onSubmit={(e) => dispatch(actions.createNewUser(e, userInputInfo))}>
            <FormLineUserInfo />
            <FormLineLogin />
            <div className="butt">
              <input className="button" type="submit" value="записаться" />
            </div>
          </form>
          <p
            className="close"
            onClick={() => {
              setTimeout(() => {
                dispatch(actions.openCloseModal())
              }, 300);
              dispatch(actions.fadeModal(!fadeModalSwitch))
            }}
          >
            close
          </p>
        </>
      )}
    </div>
  );
};
export default RegModal;
