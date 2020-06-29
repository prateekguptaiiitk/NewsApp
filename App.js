/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import TabScreen from './src/screens/TabScreen';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <TabScreen/>
    );
  }
}