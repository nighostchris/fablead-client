import axios from 'axios';
import qs from 'qs';
import {
  GET_TOKEN, LOGIN, LOGOUT, VERIFY_TOKEN,
} from '../Constant/ActionType';
import {
  BASE_URL, WEB_CLIENT_CREDENTIAL_TOKEN, AUDIENCE,
} from '../Constant/ServerConstant';

const initialState = {
  auth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return state;
    case VERIFY_TOKEN:
      console.log("verifying token");
      console.log(localStorage.getItem('access_token'));
      if (localStorage.getItem('access_token') !== null) {
        console.log(localStorage.getItem('access_token'));
        //if (localStorage.getItem('access_token') === '1234') {
        return { auth: true };
        //}
      }
      return state;
    case LOGIN:
      return axios({
        method: 'post',
        url: '/auth',
        baseURL: BASE_URL,
        headers: {
          Authorization: `Basic ${WEB_CLIENT_CREDENTIAL_TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
          grant_type: 'password',
          audience: AUDIENCE,
          username: action.username,
          password: action.password,
        }),
      })
        .then((res) => {
          localStorage.setItem('access_token', res.data.access_token);
          return { auth: true };
        })
        .catch(error => state);
    case LOGOUT:
      localStorage.removeItem('access_token');
      return { auth: false };
    default:
      return state;
  }
};

export default authReducer;
