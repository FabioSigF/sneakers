import { combineReducers } from "@reduxjs/toolkit";
import deviceTypeReducer from './deviceType/slice';
import mobileHeaderReducer from './mobileHeader/slice'
import modalReducer from './modal/slice'

const rootReducer = combineReducers({
  deviceTypeReducer,
  mobileHeaderReducer,
  modalReducer
})

export default rootReducer;