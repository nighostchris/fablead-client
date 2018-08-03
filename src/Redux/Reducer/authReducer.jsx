import {
  GET_TOKEN, LOGIN, LOGOUT, VERIFY_TOKEN,
} from '../Constant/ActionType';

const initialState = {
  auth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return state;
    case VERIFY_TOKEN:
      if (localStorage.getItem('access_token') !== null) {
        if (localStorage.getItem('access_token') === '1234') {
          return { auth: true };
        }
      }
      return state;
    case LOGIN:
      if (action.username === '1234' && action.password === '1234') {
        localStorage.setItem('access_token', '1234');
        return { auth: true };
      }
      return state;
    case LOGOUT:
      localStorage.removeItem('access_token');
      return { auth: false };
    default:
      return state;
  }
};

export default authReducer;
