import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighLight,
  TextInput,ScrollView
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import StatusBarArea from './StatusBar'
import Styles from './Styles'
import SingleView from './container/SingleView'
export default class UpcomingScreen extends Component {
  static navigationOptions = {
    tabBar: {
        label: 'Upcoming'
    }
  }
  render() {

    return (
      <View style={Styles.container}>
        <StatusBarArea/>
      <ScrollView style={{flexDirection:'row',flexWrap:'wrap'}}>
        <SingleView/>
        <SingleView/>
      </ScrollView>
      </View>
    );
  }
}
