import React from "react";
import { useSelector } from "react-redux";
import "./logo.scss";

const Logo = () => {
  const { paidTarifs } = useSelector((state) => state.userStore);
  const { isAuthenticated } = useSelector((state) => state.authStore);

  return (
    <div className={paidTarifs ? 'logo buy' : 'logo'}>
      <span>fahrengheitte</span>
      {!paidTarifs && isAuthenticated? <span className='free'>free</span>  : ''}
      
    </div>
  );
};

export default Logo;
