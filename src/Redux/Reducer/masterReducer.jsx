import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import teacherReducer from './teacherReducer';

export default combineReducers({
  messageReducer,
  teacherReducer,
});
