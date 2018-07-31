import { createStore } from 'redux';
import masterReducer from '../Reducer/masterReducer';

const store = createStore(masterReducer);

export default store;
