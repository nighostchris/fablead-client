import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import teacherReducer from './teacherReducer';
import libraryReducer from './libraryReducer';
import reminderReducer from './reminderReducer';
import seminarReducer from './seminarReducer';
import authReducer from './authReducer';

export default combineReducers({
  messageReducer,
  teacherReducer,
  libraryReducer,
  reminderReducer,
  seminarReducer,
  authReducer,
});
