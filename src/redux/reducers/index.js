/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import destinationReducer from './destination';
import userReducer from './user';

const rootReducers = combineReducers({
  user: userReducer,
  destination: destinationReducer,
});

export default rootReducers;
