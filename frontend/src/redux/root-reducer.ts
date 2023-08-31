import { combineReducers } from "@reduxjs/toolkit";
import deviceTypeReducer from "./deviceType/slice";
import mobileHeaderReducer from "./mobileHeader/slice";
import modalQuickViewReducer from "./modal/quickView/slice";
import modalAuthenticationReducer from './modal/authentication/slice'

const rootReducer = combineReducers({
  deviceTypeReducer,
  mobileHeaderReducer,
  modalQuickViewReducer,
  modalAuthenticationReducer
});

export default rootReducer;
