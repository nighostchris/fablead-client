import {
  ADD_MESSAGE, GET_MESSAGE,
} from '../Constant/messageConstant';

export const addMessage = text => ({
  type: ADD_MESSAGE,
  text,
});

export const getMessage = id => ({
  type: GET_MESSAGE,
  id,
});
