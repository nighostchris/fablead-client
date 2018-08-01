import {
  ADD_LIBRARY, GET_LIBRARY, SET_OPENED_LIBRARY,
} from '../Constant/ActionType';

export const addLibrary = (name, seminar) => ({
  type: ADD_LIBRARY,
  name,
  seminar,
});

export const getLibrary = ({
  type: GET_LIBRARY,
});

export const setOpenedLibrary = name => ({
  type: SET_OPENED_LIBRARY,
  name,
});
