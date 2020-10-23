import { NAME_SPACE } from '../namespace';

const NAME_PROPERTY = NAME_SPACE.APPLICATION;

const getStatusModalReg = (state) => {
  return state[NAME_PROPERTY].isModalRegOpen;
};

export {getStatusModalReg};
