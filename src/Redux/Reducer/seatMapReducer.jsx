import {
  UPDATE_NAME, UPDATE_COLOR,
} from '../Constant/ActionType';

const initialState = {
  seats: [
    { color: 'white', studentName: 'A' },
    { color: 'white', studentName: 'B' },
    { color: 'white', studentName: 'C' },
    { color: 'white', studentName: 'D' },
    { color: 'white', studentName: 'E' },
    { color: 'white', studentName: 'F' },
    { color: 'white', studentName: 'G' },
    { color: 'white', studentName: 'H' },
    { color: 'white', studentName: 'A' },
    { color: 'white', studentName: 'B' },
    { color: 'white', studentName: 'C' },
    { color: 'white', studentName: 'D' },
    { color: 'white', studentName: 'E' },
    { color: 'white', studentName: 'F' },
    { color: 'white', studentName: 'G' },
    { color: 'white', studentName: 'H' },
    { color: 'white', studentName: 'A' },
    { color: 'white', studentName: 'B' },
    { color: 'white', studentName: 'C' },
    { color: 'white', studentName: 'D' },
    { color: 'white', studentName: 'E' },
    { color: 'white', studentName: 'F' },
    { color: 'white', studentName: 'G' },
    { color: 'white', studentName: 'H' },
  ],
};

const seatMapReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        seats: state.seats.map((seat, index) => (index === action.id
          ? {
            ...seat,
            studentName: action.name,
          }
          : seat)),
      };
    case UPDATE_COLOR:
      return {
        ...state,
        seats: state.seats.map((seat, index) => (index === action.id
          ? {
            ...seat,
            color: action.color,
          }
          : seat)),
      };
    default:
      return state;
  }
};

export default seatMapReducer;
