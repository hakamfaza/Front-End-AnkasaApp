import { combineReducers } from "redux";
import listProductReducer from "./listProduct";
import listAirlineReducer from "./listAirline";
import detailProductReducer from "./detailProduct";
import detailUserReducer from "./detailUser";
import destinationReducer from './destination';

const rootReducers = combineReducers({
  listProduct: listProductReducer,
  listAirline: listAirlineReducer,
  detailProduct: detailProductReducer,
  detailUser: detailUserReducer,
  detailuser: detailUserReducer,
  destination: destinationReducer,
});

export default rootReducers;
