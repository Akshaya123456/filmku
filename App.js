import 'react-native-gesture-handler';
import React from 'react';
import {LogBox, Text} from 'react-native';

import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Routes from './src/navigations/routes';
import configureStore from './src/redux-store/store';

const store = configureStore();
const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
