import { extend } from '../../utils';

const initialState = {
  isModalRegOpen: false,
}

const ActionType = {
  CHANGE_STATUS_OPEN_MODAL_REG: `CHANGE_STATUS_OPEN_MODAL_REG`,
}

const ActionCreator = {
  changeStatusOpenModalReg: (isOpen) => ({
    type: ActionType.CHANGE_STATUS_OPEN_MODAL_REG,
    payload: isOpen
  }),
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_STATUS_OPEN_MODAL_REG:
      return extend(store, {
        isModalRegOpen: action.payload
      })
    default:
      return store;
  }
}

export { ActionCreator, reducer };
