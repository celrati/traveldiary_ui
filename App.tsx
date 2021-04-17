/**
 * by celrati
 * startPoint apps
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  Text, View,
} from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { changeCount } from './src/actions/counts'
import { bindActionCreators } from 'redux';
import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from './src/screens/Welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Travels } from './src/screens/Travels';
import { Plannings } from './src/screens/Plannings';
import { Countries } from './src/screens/Countries';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faSuitcaseRolling, faPaperPlane, faPassport } from '@fortawesome/free-solid-svg-icons'



const App: () => Node = () => {

  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeNavigator = () => (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Travels') {
          return <FontAwesomeIcon icon={faSuitcaseRolling} />
        } else if (route.name === 'Plannings') {
          return <FontAwesomeIcon icon={faPaperPlane} />
        } else if (route.name === 'Countries') {
          return <FontAwesomeIcon icon={faPassport} />
        }
      },
    })}>
      <Tab.Screen name="Travels" component={Travels} />
      <Tab.Screen name="Plannings" component={Plannings} />
      <Tab.Screen name="Countries" component={Countries} />
    </Tab.Navigator>
  )

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="TravelDiary v0.1" component={Welcome} />
        <Stack.Screen name="Home" component={HomeNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
