import {
  GET_STUDENT_CONTAINER, UPDATE_SEAT_NO,
} from '../Constant/ActionType';

export const getStudentContainer = ({
  type: GET_STUDENT_CONTAINER,
});

export const updateColor = (name, id, seatno) => ({
  type: UPDATE_SEAT_NO,
  name,
  id,
  seatno,
});
