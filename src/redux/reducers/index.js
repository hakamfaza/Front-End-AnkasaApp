import { combineReducers } from "redux";
import listProductReducer from "./listProduct";
import listAirlineReducer from "./listAirline";

const rootReducers = combineReducers({
  listProduct: listProductReducer,
  listAirline: listAirlineReducer,
});

export default rootReducers;
