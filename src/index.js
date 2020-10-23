import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers/reducer";
import "./index.css";
import App from "./components/App/App.jsx";
// import { ActionCreator as DataActionCreator } from './reducers/data/reducer';
import { ActionCreator as UserActionCreator, AuthStatus} from "./reducers/user/reducer";
import { ActionCreator as ApplicationActionCreator } from './reducers/application/reducer';
import { getUserData } from "./data";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(UserActionCreator.changeStatusLoadingUserData(true));
const userData = getUserData(store.dispatch);
store.dispatch(UserActionCreator.changeStatusLoadingUserData(false));
store.dispatch(UserActionCreator.changeStatusLoadedUserData(true));
if (userData) {
  store.dispatch(UserActionCreator.authorizeUser(AuthStatus.USER_AUTH, userData));
} else {
  store.dispatch(ApplicationActionCreator.changeStatusOpenModalReg(true));
}

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
