import React from "react";
import imageLogin from '../../images/icon-login.svg';

const NoAuth = (props) => {
  return (
    <div className="row no-auth justify-content-center align-items-center">
      <img className="no-auth__image" src={imageLogin} width="250" alt="" />
      <p className="no-auth__text">You must log in to continue!</p>
      <a href="#!" className="no-auth__button-link button button--blue">
        Sign in
      </a>
    </div>
  );
};

export default NoAuth;
