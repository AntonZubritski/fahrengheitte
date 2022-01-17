import React from "react";
import * as actions from '../../redux/actions'
import { useDispatch } from 'react-redux'

const FormLineLogin = () => {
  const dispatch = useDispatch()

  const inputChange = ({ target: { value, id } }) => {
    dispatch(actions.setUserInfo(value, id))
  }
  return (
    <>
    <div className="form-line">
      <label>Email</label>
      <input type="email" id="email" onChange={inputChange} required />
    </div>

    <div className="form-line">
      <label>Password</label>
      <input type="password" id="password" onChange={inputChange} />
    </div>
  </>
  )

};

export default FormLineLogin;
