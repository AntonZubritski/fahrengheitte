import React from "react";
import * as actions from '../../redux/actions'
import { useDispatch } from 'react-redux'

const FormLineToken = () => {
  const dispatch = useDispatch()

  const inputChange = ({ target: { value, id } }) => {
    dispatch(actions.setUserInfo(value, id))
  }
  return (
    <>
    <div className="form-line">
      <label>Token</label>
      <input type="token" id="token" onChange={inputChange} required />
    </div>
  </>
  )

};

export default FormLineToken;
