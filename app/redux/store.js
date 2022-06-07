import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import {rootReducer} from './rootReducer';

// const persistedReducer = persistReducer(
//   {key: 'root', storage: AsyncStorage},
//   rootReducer,
// );

// Use persistedReducer to apply persistor to whole project
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

export {store, persistor};
