import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import masterReducer from '../Reducer/masterReducer';

const store = createStore(masterReducer, applyMiddleware(thunk));

export default store;
