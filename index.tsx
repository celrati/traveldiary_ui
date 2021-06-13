import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';


const store = configureStore()


const RNRedux = () => (
  <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <App />
    </ApplicationProvider>

  </Provider>

)

AppRegistry.registerComponent(appName, () => RNRedux);