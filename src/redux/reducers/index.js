import { combineReducers } from "redux";
import userReducer from "./user";
import detailUserReducer from "./detailUser";
import destinationReducer from './destination';

const rootReducers = combineReducers({
  user: userReducer,
  detailuser: detailUserReducer,
  destination: destinationReducer,
})

export default rootReducers;
