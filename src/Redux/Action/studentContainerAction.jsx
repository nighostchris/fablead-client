import {
  GET_STUDENT_CONTAINER, UPDATE_SEAT_NO, UPDATE_DRAGGABLE, RESET_STUDENT_CONTAINER,
} from '../Constant/ActionType';

export const getStudentContainer = ({
  type: GET_STUDENT_CONTAINER,
});

export const updateSeatNo = (name, id, seatno) => ({
  type: UPDATE_SEAT_NO,
  name,
  id,
  seatno,
});

export const updateDraggable = (name, id, drag) => ({
  type: UPDATE_DRAGGABLE,
  name,
  id,
  drag,
});

export const resetStudentContainer = ({
  type: RESET_STUDENT_CONTAINER,
});
