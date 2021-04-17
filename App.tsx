/**
 * by celrati
 * startPoint apps
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Text,View,
} from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { changeCount } from './src/actions/counts'
import { bindActionCreators } from 'redux';
import { Home } from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from './src/pages/Welcome';


const App: () => Node = () => {

  const count = useSelector(( state:any) => state.count);
  const dispatch = useDispatch();

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="TravelDiary v0.1" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;
