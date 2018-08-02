import {
  GET_SEMINAR, ADD_SEMINAR,
} from '../Constant/ActionType';

const initialState = {
  seminars: [
    {
      seminarType: 'Seminar',
      name: 'Seminar Name',
      teacher: 'Chan Li Li',
      location: '北京',
      date: '6月20日',
      countdown: 10,
    },
    {
      seminarType: 'Training',
      name: 'Seminar Name',
      teacher: 'Yuen Ka Yan',
      location: '香港',
      date: '6月15日',
      countdown: 5,
    },
    {
      seminarType: 'Consulting',
      name: 'Seminar Name',
      teacher: 'Wong Man Man',
      location: '上海',
      date: '6月10日',
      countdown: 0,
    },
    {
      seminarType: 'Seminar',
      name: 'Seminar Name',
      teacher: 'Sze Lai Yu',
      location: '香港',
      date: '6月1日',
      countdown: 0,
    },
  ],
};

const seminarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEMINAR:
      return state;
    case ADD_SEMINAR:
      return state.seminars.push({
        seminarType: action.seminarType,
        name: action.name,
        teacher: action.teacher,
        location: action.location,
        date: action.date,
        countdown: action.countdown,
      });
    default:
      return state;
  }
};

export default seminarReducer;
