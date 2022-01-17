import React from "react";
import "./log-reg-modal.scss";
import { FormLineLogin } from "./";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const LogModal = () => {
  const dispatch = useDispatch();

  const { loginError } = useSelector((state) => state.authStore);
  const { userInputInfo, switchModalForm } = useSelector(
    (state) => state.serviceStore
  );

  const { email, password } = userInputInfo;

  return (
    <div
      className={switchModalForm ? "modal-block-switch" : "modal-block-switch2"}
    >
      <div
        className="title-modal"
        onClick={() => dispatch(actions.switchModalForm())}
      >
        Вход
      </div>
      {switchModalForm && (
        <>
          <form
            className="block-in"
            onSubmit={(e) => dispatch(actions.loginUser(e, email, password))}
          >
            <FormLineLogin />
            <div className="butt">
              <input className="button" type="submit" value="войти" />
            </div>
            <p className={loginError ? "error error-active" : "error"}>
              Incorrect email or password.
            </p>
          </form>
          <p
            className="close"
            onClick={() => {
              setTimeout(() => {
                dispatch(actions.openCloseModal());
              }, 300);
              dispatch(actions.fadeModal());
            }}
          >
            close
          </p>
        </>
      )}
    </div>
  );
};
export default LogModal;
