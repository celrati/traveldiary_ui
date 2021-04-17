import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { Provider as AntProvider } from '@ant-design/react-native';


const store = configureStore()


const RNRedux = () => (
  <Provider store={store}>
    <AntProvider>
      <App />
    </AntProvider>
  </Provider>

)

AppRegistry.registerComponent(appName, () => RNRedux);