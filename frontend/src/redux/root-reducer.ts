import { combineReducers } from "@reduxjs/toolkit";
import deviceTypeReducer from './deviceType/slice';
import mobileHeaderReducer from './mobileHeader/slice'

const rootReducer = combineReducers({
  deviceTypeReducer,
  mobileHeaderReducer
})

export default rootReducer;