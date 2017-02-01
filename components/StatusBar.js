import React, {Component} from 'react';
import ReactNative from 'react-native';

const { StyleSheet, Text, View,Platform,StatusBar} = ReactNative;

export default class StatusBarArea extends Component {
  render() {
    return (

        <View style={{paddingTop: (Platform.OS === 'ios') ? 20 : 0}}>
          <StatusBar
            backgroundColor="#1A237E"
            barStyle= { (Platform.OS == 'ios') ? "dark-content" :"light-content"}/>
        </View>

    );
  }
}
