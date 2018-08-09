import {
  GET_STUDENT_CONTAINER, UPDATE_SEAT_NO,
} from '../Constant/ActionType';

const initialState = {
  companies: [
    { name: 'EHE', count: 3, color: 'yellow', seatno: [-1, -1, -1] },
    { name: 'MsShe', count: 5, color: 'brown', seatno: [-1, -1, -1, -1, -1] },
    { name: 'V-MEN', count: 2, color: 'blue', seatno: [-1, -1] },
    { name: 'ZUEE', count: 3, color: 'red', seatno: [-1, -1, -1] },
  ],
};

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
            seatno: company.map((seat, index) => (index === action.no
              ? action.seatno : seat)),
          }
          : company)),
      };
    default:
      return state;
  }
};

export default studentContainerReducer;
