import React from "react";
import PropTypes from 'prop-types';
import "./Header.css";
import iconUser from "../../images/icon-user.svg";

const Header = (props) => {
  const { userData, onOpenModal } = props;
  const userName = userData.firstName || `Sign In`;

  return (
    <header className="header">
      <div className="header__content container">
        <div className="col-xl-3">
          <a href="#!" className="header__logo">
            <span className="header__logo">Trello</span>
          </a>
        </div>
        <div className="col-xl-3 ml-auto">
          <div className="header__profile d-flex justify-content-end align-items-center profile" onClick={onOpenModal}>
            <img
              className="profile__photo"
              src={iconUser}
              alt="Аватарка пользователя"
            />
            <div href="#!" className="profile__name">{userName}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  userData: PropTypes.shape({
    firstName: PropTypes.string,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
}

export default Header;
