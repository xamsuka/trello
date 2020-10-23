import { NAME_SPACE } from './namespace';
import { reducer as dataReducer } from './data/reducer';
import { reducer as userReducer } from './user/reducer';
import { reducer as applicationReducer } from './application/reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  [NAME_SPACE.DATA]: dataReducer,
  [NAME_SPACE.USER]: userReducer,
  [NAME_SPACE.APPLICATION]: applicationReducer,
});

export { reducer };
