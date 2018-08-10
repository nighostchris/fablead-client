import {
  GET_STUDENT_CONTAINER, UPDATE_SEAT_NO,
} from '../Constant/ActionType';

const initialState = {
  companies: [
    {
      name: 'EHE', count: 3, color: 'yellow', seatno: ['', '', ''],
    },
    {
      name: 'MsShe', count: 5, color: 'brown', seatno: ['', '', '', '', ''],
    },
    {
      name: 'V-MEN', count: 2, color: 'blue', seatno: ['', ''],
    },
    {
      name: 'ZUEE', count: 3, color: 'red', seatno: ['', '', ''],
    },
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
            seatno: company.seatno.map((seat, index) => (index === action.id
              ? action.seatno : seat)),
          }
          : company)),
      };
    default:
      return state;
  }
};

export default studentContainerReducer;
