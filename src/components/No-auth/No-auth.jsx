import React from "react";
import PropTypes from "prop-types";
import "./No-auth.css";
import imageLogin from "../../images/icon-login.svg";

const NoAuth = (props) => {
  const { onOpenModal } = props;
  return (
    <div className="row no-auth">
      <div className="no-auth__content d-flex flex-column flex-sm-row  justify-content-center align-items-center m-auto">
        <img className="no-auth__image" src={imageLogin} width="250" alt="" />
        <div className="no-auth__group d-flex flex-wrap justify-content-center align-items-center">
          <p className="no-auth__text w-100 text-center">
            You must log in to continue!
          </p>
          <a
            href="#!"
            className="no-auth__button-link btn btn-primary"
            onClick={onOpenModal}
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

NoAuth.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default NoAuth;
