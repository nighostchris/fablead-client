import {
  UPDATE_NAME, UPDATE_COLOR,
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
