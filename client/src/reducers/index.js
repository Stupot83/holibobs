import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import weatherStation from "./weatherStation";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  weatherStation
});
