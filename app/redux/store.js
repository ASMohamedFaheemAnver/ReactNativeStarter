import {configureStore} from '@reduxjs/toolkit';
import createFlipperDebugger from 'redux-flipper';
import {persistStore} from 'redux-persist';
import {rootReducer} from './rootReducer';

// const persistedReducer = persistReducer(
//   {key: 'root', storage: AsyncStorage},
//   rootReducer,
// );

const middlewares = [];

if (__DEV__) {
  middlewares.push(createFlipperDebugger());
}

// Use persistedReducer to apply persistor to whole project
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(middlewares),
});

const persistor = persistStore(store);

export {store, persistor};
