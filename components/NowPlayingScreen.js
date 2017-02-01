import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighLight,
  TextInput,

} from 'react-native';

import { TabNavigator } from 'react-navigation';
import Styles from './Styles'
import StatusBarArea from './StatusBar'
export default class NowPlayingScreen extends Component {
  static navigationOptions = {
      tabBar: {
        label: 'Now Playing'
      }
    }
  render() {

    return (
      <View style={Styles.container}>
      <StatusBarArea/>
        <Text>
        NowPlayingScreen
      </Text>
      </View>
    );
  }
}
