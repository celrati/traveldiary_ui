import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { Provider as AntProvider } from '@ant-design/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const store = configureStore()

const Stack = createStackNavigator();

const RNRedux = () => (
  <Provider store={store}>
    <AntProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TravelDiary v0.1" component={App} />

        </Stack.Navigator>
      </NavigationContainer>
    </AntProvider>
  </Provider>

)

AppRegistry.registerComponent(appName, () => RNRedux);