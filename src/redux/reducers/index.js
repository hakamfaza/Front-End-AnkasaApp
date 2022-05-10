import { combineReducers } from "redux";
import listProductReducer from "./listProduct";
import listAirlineReducer from "./listAirline";
import detailProductReducer from "./detailProduct";
import detailUserReducer from "./detailUser";
import destinationReducer from './destination';
import oldDestinationReducer from "./oldDestination";
import passengerReducer from './passengerData';
import listMyBookingReducer from "./transaction";

const rootReducers = combineReducers({
  listProduct: listProductReducer,
  listAirline: listAirlineReducer,
  detailProduct: detailProductReducer,
  detailUser: detailUserReducer,
  destination: destinationReducer,
  oldDestination: oldDestinationReducer,
  passenger: passengerReducer,
  myBooking: listMyBookingReducer
});

export default rootReducers;
