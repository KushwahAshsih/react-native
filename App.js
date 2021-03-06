/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import {  Platform,  StyleSheet,  Text,  View} from 'react-native';
import  MainScreen from './Components/MainScreen'

import  { Icon } from   'native-base'
import SecondScreen from "./Components/FlexScreen";
import StateAndProb from "./Components/StateAndProb";
import HandlingTextInput from "./Components/HandlingTextInput";
import HandlingTouches from "./Components/HandlingTouches";
import TouchablesHandling from "./Components/TouchablesHandling";




type Props = {};
export default class App extends Component<Props> {



  render() {
    return (

        <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator({

    Main: {
        screen: TouchablesHandling
    }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
