import {
  UPDATE_NAME, UPDATE_COLOR, RESET_SEATS,
} from '../Constant/ActionType';

export const updateName = (id, name) => ({
  type: UPDATE_NAME,
  id,
  name,
});

export const updateColor = (id, color) => ({
  type: UPDATE_COLOR,
  id,
  color,
});

export const resetSeats = ({
  type: RESET_SEATS,
});
