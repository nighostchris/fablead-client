import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import teacherReducer from './teacherReducer';
import libraryReducer from './libraryReducer';
import reminderReducer from './reminderReducer';

export default combineReducers({
  messageReducer,
  teacherReducer,
  libraryReducer,
  reminderReducer,
});
