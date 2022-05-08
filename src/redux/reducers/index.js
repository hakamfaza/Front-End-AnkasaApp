import { combineReducers } from "redux";
import userReducer from "./user";
import detailUserReducer from "./detailUser";

const rootReducers = combineReducers({
  user: userReducer,
  detailuser: detailUserReducer
});

export default rootReducers;
