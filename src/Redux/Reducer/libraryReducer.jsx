import {
  ADD_LIBRARY, GET_LIBRARY, SET_OPENED_LIBRARY,
} from '../Constant/ActionType';

const initialState = {
  library: {
    opened: '',
    details: [
      { name: 'General 課程教材', seminar: '', count: 3 },
      { name: '演講資料', seminar: 'Seminar Name', count: 5 },
    ],
  },
};

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIBRARY:
      state.library.details.push(
        { name: action.name, seminar: action.seminar, count: 0 },
      );
      return state;
    case GET_LIBRARY:
      return state;
    case SET_OPENED_LIBRARY:
      return {
        ...state,
        library: {
          ...state.library,
          opened: action.name,
        },
      };
    default:
      return state;
  }
};

export default libraryReducer;
