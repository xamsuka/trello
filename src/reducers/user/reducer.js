import { extend } from '../../utils';

const AuthStatus = {
  USER_AUTH: `USER_AUTH`,
  USER_NOAUTH: `USER_NOAUTH`,
};

const initialState = {
  authStatus: AuthStatus.USER_NOAUTH,
  userData: {},
  isLoadingUserAuth: false,
  isLoadedUserAuth: false,
}

const ActionType = {
  REQUIRED_AUTH: `REQUIRED_AUTH`,
  CHANGE_STATUS_LOADING_USER_DATA: `CHANGE_STATUS_LOADING_USER_DATA`,
  CHANGE_STATUS_LOADED_USER_DATA: `CHANGE_STATUS_LOADED_USER_DATA`,
}

const ActionCreator = {
  authorizeUser: (status, userData) => ({
    type: ActionType.REQUIRED_AUTH,
    payloadStatus: status,
    payloadUserData: userData
  }),
  changeStatusLoadingUserData: (isLoading) => ({
    type: ActionType.CHANGE_STATUS_LOADING_USER_DATA,
    payload: isLoading
  }),
  changeStatusLoadedUserData: (isLoaded) => ({
    type: ActionType.CHANGE_STATUS_LOADED_USER_DATA,
    payload: isLoaded
  }),
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTH:
      return extend(store, {
        authStatus: action.payloadStatus,
        userData: action.payloadUserData
      })
    case ActionType.CHANGE_STATUS_LOADING_USER_DATA:
      return extend(store, {
        isLoadingUserAuth: action.payload
      })
    case ActionType.CHANGE_STATUS_LOADED_USER_DATA:
      return extend(store, {
        isLoadedUserAuth: action.payload
      });
    default:
      return store;
  }
}

export {AuthStatus,ActionCreator, reducer};
