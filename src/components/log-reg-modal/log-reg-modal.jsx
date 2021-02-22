import React, { useState, useEffect } from "react";
import "./log-reg-modal.scss";
import firebase from "firebase/app";
import "firebase/database";

const LogReg = ({ setModalWindow, modalWindow }) => {
  const [state, setState] = useState({ phoneNumber: "" });
  const [classModal, setClassModal] = useState(false);

  useEffect(() => {
    console.log(state, "state");
  });

  const sendUserInfo = (e) => {
    e.preventDefault();
    const db = firebase.database();
    db.ref("users")
      .push(state)
      .then(() => alert("Поздравляем! :)"))
      .catch((err) => alert("Уупс, что-то пошло не так:", err));
  };

  const inputChange = ({ target: { value, id } }) => {
    if (id === "countryCode" || id === 'operatorCode' || id === 'phoneNumber') {

      // setState({ ...state, [id]: value.filter() });

      setState({ ...state, [id]: value.replace(/[a-z][A-Z]?$/, "") });
    } else {
      setState({ ...state, [id]: value });
    }
  };

  const classFadeModal = () => {
    if (classModal) {
      return "modal modal-disactive";
    } else if (modalWindow) {
      return "modal modal-active";
    } else {
      return "modal";
    }
  };

  return (
    <div className={classFadeModal()}>
      <div className="modal-block">
        <form onSubmit={sendUserInfo}>
          <div className='form-line'>
            <label>Имя</label>
            <input type="text" id="name" onChange={inputChange} required />
          </div>

          <div className='form-line'>
            <label>Фамилия</label>
            <input type="text" id="surname" onChange={inputChange} required />
          </div>

          <div className='form-line'>
            <label>Телефон</label>
            <div className="phoneInput">
              <input
                className="input1"
                type="tel"    
                placeholder="+XXX"
                pattern="[\+]\d{3}"
                title="Format: +375"
                id="countryCode"
                onChange={inputChange}
                required
              />
              <input
                className="input2"
                type="tel"
                placeholder="(XX)"
                pattern="\d{2}"
                title="Format: XX"
                id="operatorCode"
                onChange={inputChange}
                required
              />
              <input
                className="input3"
                type="tel"
                placeholder="XXX-XX-XX"
                pattern="\d{7}"
                title="Format: XXXXXXX"
                id="phoneNumber"
                onChange={inputChange}
                required
              />
            </div>
          </div>

          <div className='form-line'>
            <label>Email</label>
            <input type="email" id="email" onChange={inputChange} required />
          </div>

          {/* <div>
          <label>Password</label>
          <input type="password" id="password" />
        </div> */}

          <div className="butt">
            <input className="button" type="submit" value="записаться" />
          </div>
        </form>
        <p
          className="close"
          onClick={() => {
            setTimeout(() => {
              setModalWindow(!modalWindow);
            }, 800);
            setClassModal(!classModal);
          }}
        >
          close
        </p>
      </div>
    </div>
  );
};
export default LogReg;
