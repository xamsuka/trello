import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./App.css";
import Header from "../Header/Header.jsx";
import NoAuth from "../No-auth/No-auth.jsx";
import ListsBoard from "../Lists-board/Lists-board.jsx";
import Modal from "../Modal/Modal.jsx";
import FormRegistration from "../Form-registration/Form-registration.jsx";
import { getUserData } from "../../reducers/user/selectors.js";
import { getStatusModalReg } from "../../reducers/application/selectors";
import { ActionCreator as UserActionCreator, AuthStatus } from "../../reducers/user/reducer";
import { ActionCreator as ApplicationActionCreator } from '../../reducers/application/reducer';

const listsData = [
  {
    listName: `TODO`,
  },
  {
    listName: `In Progress`
  },
  {
    listName: `Testing`
  },
  {
    listName: `Done`
  }
];

function App(props) {
  const { userData, isModalRegOpen, onRegistration, onChangeStatusModalReg} = props;

  const isUserData = Object.keys(userData).length === 0;

  return (
    <React.Fragment>
      <Header userData={userData} onOpenModal={onChangeStatusModalReg} />

      <main className="page-main d-flex">
        <h2 className="visually-hidden">
          List of cards from the "Name board" board
        </h2>
        <div className="container">
          {isUserData ? <NoAuth onOpenModal={onChangeStatusModalReg} /> : <ListsBoard listsData={listsData} />}
        </div>

        {
          isUserData ?
          <Modal isOpen={isModalRegOpen} onCancel={onChangeStatusModalReg} title="Register New Account">
           <FormRegistration onSubtitForm={onRegistration} />
          </Modal> :
          ``
        }

      </main>
    </React.Fragment>
  );
}

App.propTypes = {
  userData: PropTypes.shape({
    firstName: PropTypes.string,
  }).isRequired,
  isModalRegOpen: PropTypes.bool.isRequired,
  onRegistration: PropTypes.func.isRequired,
  onChangeStatusModalReg: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userData: getUserData(state),
  isModalRegOpen: getStatusModalReg(state),
});

const mergeProps = (stateProps, dispatchProps) => {
  const { userData } = stateProps;
  const { isModalRegOpen } = stateProps;
  const { dispatch } = dispatchProps;

  const changeStatusOpenModalReg = () => {
      if (isModalRegOpen === true) {
        dispatch(ApplicationActionCreator.changeStatusOpenModalReg(false));
      } else {
        dispatch(ApplicationActionCreator.changeStatusOpenModalReg(true));
      }
  };

  return {
    userData,
    isModalRegOpen,
    onChangeStatusModalReg: () => {
      changeStatusOpenModalReg();
    },
    onRegistration: (userData) => {
      dispatch(ApplicationActionCreator.changeStatusOpenModalReg(false));
      dispatch(UserActionCreator.authorizeUser(AuthStatus.USER_AUTH, userData));
    },
  };
};


export { App };
export default connect(mapStateToProps, null, mergeProps)(App);
