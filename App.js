import LanguageProvider from '@provider/LanguageProvider';
import {persistor, store} from '@redux/store';
import Child from '@screens/Child';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider loading={null}>
          <Child></Child>
        </LanguageProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
