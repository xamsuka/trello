import { extend } from '../../utils';

const initialState = {
  lists: [],
}

const ActionType = {
  GET_LISTS: `GET_LISTS`,
  UPDATE_LISTS: `UPDATE_LISTS`,
}

const ActionCreactor = {
  loadLists: (lists) => ({
    type: ActionType.GET_LISTS,
    payload: lists
  }),
  updateLists: (lists) => ({
    type: ActionType.UPDATE_LISTS,
    payload: lists
  }),
}

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LISTS:
      return extend(store, {
        lists: action.payload,
      });
    case ActionType.UPDATE_LISTS:
      return extend(store, {
        lists: action.payload,
      });
    default:
      return store;
  }
}

export {reducer, ActionCreactor};
