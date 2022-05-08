import { combineReducers } from "redux";
<<<<<<< HEAD
import listProductReducer from "./listProduct";
import listAirlineReducer from "./listAirline";
import detailProductReducer from "./detailProduct";
import detailUserReducer from "./detailUser";

const rootReducers = combineReducers({
  listProduct: listProductReducer,
  listAirline: listAirlineReducer,
  detailProduct: detailProductReducer,
  detailUser: detailUserReducer,
});
=======
import userReducer from "./user";
import detailUserReducer from "./detailUser";
import destinationReducer from './destination';

const rootReducers = combineReducers({
  user: userReducer,
  detailuser: detailUserReducer,
  destination: destinationReducer,
})
>>>>>>> master

export default rootReducers;
