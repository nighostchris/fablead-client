import {
  UPDATE_NAME, UPDATE_COLOR, RESET_SEATS,
} from '../Constant/ActionType';

const initialState = {
  seats: {
    '1A': { color: 'white', studentName: 'A' },
    '1B': { color: 'white', studentName: 'B' },
    '1C': { color: 'white', studentName: 'C' },
    '1D': { color: 'white', studentName: 'D' },
    '1E': { color: 'white', studentName: 'E' },
    '1F': { color: 'white', studentName: 'F' },
    '1G': { color: 'white', studentName: 'G' },
    '1H': { color: 'white', studentName: 'H' },
    '2A': { color: 'white', studentName: 'A' },
    '2B': { color: 'white', studentName: 'B' },
    '2C': { color: 'white', studentName: 'C' },
    '2D': { color: 'white', studentName: 'D' },
    '2E': { color: 'white', studentName: 'E' },
    '2F': { color: 'white', studentName: 'F' },
    '2G': { color: 'white', studentName: 'G' },
    '2H': { color: 'white', studentName: 'H' },
    '3A': { color: 'white', studentName: 'A' },
    '3B': { color: 'white', studentName: 'B' },
    '3C': { color: 'white', studentName: 'C' },
    '3D': { color: 'white', studentName: 'D' },
    '3E': { color: 'white', studentName: 'E' },
    '3F': { color: 'white', studentName: 'F' },
    '3G': { color: 'white', studentName: 'G' },
    '3H': { color: 'white', studentName: 'H' },
  },
};

const resetState = initialState;

const seatMapReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        seats: {
          ...state.seats,
          [action.id]: {
            ...state.seats[action.id],
            studentName: action.name,
          },
        },
      };
    case UPDATE_COLOR:
      return {
        ...state,
        seats: {
          ...state.seats,
          [action.id]: {
            ...state.seats[action.id],
            color: action.color,
          },
        },
      };
    case RESET_SEATS:
      return resetState;
    default:
      return state;
  }
};

export default seatMapReducer;
