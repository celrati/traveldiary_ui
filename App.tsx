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



const App: () => Node = () => {

  const count = useSelector(( state:any) => state.count);
  const dispatch = useDispatch();


  return (
    <Home />
  );
};


export default App;
