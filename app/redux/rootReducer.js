import AsyncStorage from '@react-native-async-storage/async-storage';
import application from '@redux/slice/applicationSlice';
import counter from '@redux/slice/counterSlice';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

const applicationPersistedReducer = persistReducer(
  {key: 'application', storage: AsyncStorage},
  application,
);

const rootReducer = combineReducers({
  counter,
  application: applicationPersistedReducer,
});

export {rootReducer};
