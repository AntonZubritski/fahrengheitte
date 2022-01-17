import React, { useEffect, useState } from "react";
import "./email-confirm-block.scss";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const EmailConfirmBlock = () => {
  const { verifyingError } = useSelector((state) => state.authStore);
  const [timer, setTimer] = useState(60);
  const [startTimer, setStartTimer] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (startTimer && timer >= 1) {
      const decTimer = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
      return () => {
        clearInterval(decTimer);
      };
    }
  }, [startTimer, timer]);

  useEffect(() => {
    !timer && setStartTimer(false);
  }, [timer]);

  const verifyTimer = () => {
    setStartTimer(true);
    dispatch(actions.verificationUs());
  };

  return (
    <div className="EmailConfirmBlock">
      <div>Письмо с подтвержением отправлено на вашу почту!</div>
      <div>Обновите страницу после подтвержения почты!</div>
      <div>
        Не пришло Письмо?
        <input
          className="refresh"
          onClick={() => verifyTimer()}
          type="button"
          value={`Отправить eще раз ${startTimer && timer >= 1 ? timer : ""}`}
        />
      </div>
      <div
        className={verifyingError ? "verify error" : "verify"}
      >
        Слишком много запросов, повторите попытку позже
      </div>
    </div>
  );
};
export default EmailConfirmBlock;
