import {
  GET_SEMINAR, ADD_SEMINAR,
} from '../Constant/ActionType';

export const addSeminar = (seminarType, name, teacher, location, date, countdown) => ({
  type: ADD_SEMINAR,
  seminarType,
  name,
  teacher,
  location,
  date,
  countdown,
});

export const getSeminar = id => ({
  type: GET_SEMINAR,
  id,
});
