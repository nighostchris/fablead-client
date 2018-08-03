import {
  GET_TOKEN, VERIFY_TOKEN, LOGIN, LOGOUT,
} from '../Constant/ActionType';

export const getToken = ({
  type: GET_TOKEN,
});

export const verifyToken = token => ({
  type: VERIFY_TOKEN,
  token,
});

export const login = (username, password) => ({
  type: LOGIN,
  username,
  password,
});

export const logout = ({
  type: LOGOUT,
});
