import axios from 'axios';
import qs from 'qs';
import {
  GET_TOKEN, VERIFY_TOKEN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT,
} from '../Constant/ActionType';
import {
  BASE_URL, WEB_CLIENT_CREDENTIAL_TOKEN, AUDIENCE,
} from '../Constant/ServerConstant';

export const getToken = ({
  type: GET_TOKEN,
});

export const verifyToken = token => ({
  type: VERIFY_TOKEN,
  token,
});

export const loginSuccess = ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = ({
  type: LOGIN_FAILURE,
});

export const login = (id, pw) => dispatch => axios({
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
    username: id,
    password: pw,
  }),
})
  .then((res) => {
    localStorage.setItem('access_token', res.data.access_token);
    dispatch(loginSuccess);
  })
  .catch((err) => {
    dispatch(loginFailure);
  });

export const logout = ({
  type: LOGOUT,
});
