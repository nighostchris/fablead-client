import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import teacherReducer from './teacherReducer';
import libraryReducer from './libraryReducer';

export default combineReducers({
  messageReducer,
  teacherReducer,
  libraryReducer,
});
