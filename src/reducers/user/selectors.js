import {NAME_SPACE} from '../namespace';

const NAME_PROPERTY = NAME_SPACE.USER;

export const getUserData = (state) => {
  return state[NAME_PROPERTY].userData;
};
