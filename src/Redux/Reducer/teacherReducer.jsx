import {
  ADD_TEACHER, GET_TEACHER,
} from '../Constant/ActionType';

const initialState = {
  teachers: [
    { name: 'Chan Li Li', upcoming: 3, completed: 5 },
    { name: 'Sze Lai Yu', upcoming: 0, completed: 0 },
    { name: 'Wong Man Man', upcoming: 0, completed: 12 },
    { name: 'Yuen Ka Yan', upcoming: 8, completed: 0 },
  ],
};

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEACHER:
      state.teachers.push({ name: action.name, upcoming: 0, completed: 0 });
      return state;
    case GET_TEACHER:
      return state;
    default:
      return state;
  }
};

export default teacherReducer;
