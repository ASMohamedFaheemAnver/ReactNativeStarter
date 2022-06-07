import application from '@redux/slice/applicationSlice';
import counter from '@redux/slice/counterSlice';
import {combineReducers} from '@reduxjs/toolkit';
const rootReducer = combineReducers({
  counter,
  application,
});

export {rootReducer};
