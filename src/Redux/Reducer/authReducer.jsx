import {
  GET_TOKEN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, VERIFY_TOKEN,
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
        return { auth: true };
      }
      return { auth: false };
    case LOGIN_SUCCESS:
      return { auth: true };
    case LOGIN_FAILURE:
      return { auth: false };
    case LOGOUT:
      localStorage.removeItem('access_token');
      return { auth: false };
    default:
      return state;
  }
};

export default authReducer;
