import {
  ADD_TEACHER, GET_TEACHER,
} from '../Constant/ActionType';

export const addTeacher = name => ({
  type: ADD_TEACHER,
  name,
});

export const getTeacher = ({
  type: GET_TEACHER,
});
