import React from "react";
import * as actions from '../../redux/actions'
import { useDispatch } from 'react-redux'

const FormLineUserInfo = () => {
  const dispatch = useDispatch()

  const inputChange = ({ target: { value, id } }) => {
    dispatch(actions.setUserInfo(value, id))
  }

  return (
    <>
      <div className="form-line">
        <label>Имя</label>
        <input type="text" id="name" onChange={inputChange} required />
      </div>
      <div className="form-line">
        <label>Фамилия</label>
        <input type="text" id="surname" onChange={inputChange} required />
      </div>
      <div className="form-line">
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
    </>
  );
};

export default FormLineUserInfo;
