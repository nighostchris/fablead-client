import {
  GET_STUDENT_CONTAINER, UPDATE_SEAT_NO, UPDATE_DRAGGABLE, RESET_STUDENT_CONTAINER,
} from '../Constant/ActionType';

const initialState = {
  companies: [
    {
      name: 'EHE', count: 3, color: 'yellow', seatno: ['', '', ''], draggable: [true, true, true],
    },
    {
      name: 'MsShe', count: 5, color: 'brown', seatno: ['', '', '', '', ''], draggable: [true, true, true, true, true],
    },
    {
      name: 'V-MEN', count: 2, color: 'blue', seatno: ['', ''], draggable: [true, true],
    },
    {
      name: 'ZUEE', count: 3, color: 'red', seatno: ['', '', ''], draggable: [true, true, true],
    },
  ],
};

const resetState = initialState;

const studentContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT_CONTAINER:
      return state;
    case UPDATE_SEAT_NO:
      return {
        ...state,
        companies: state.companies.map(company => (company.name === action.name
          ? {
            ...company,
            seatno: company.seatno.map((seat, index) => (index === action.id
              ? action.seatno : seat)),
          }
          : company)),
      };
    case UPDATE_DRAGGABLE:
      return {
        ...state,
        companies: state.companies.map(company => (company.name === action.name
          ? {
            ...company,
            draggable: company.draggable.map((d, index) => (index === action.id
              ? action.drag : d)),
          }
          : company)),
      };
    case RESET_STUDENT_CONTAINER:
      return resetState;
    default:
      return state;
  }
};

export default studentContainerReducer;
