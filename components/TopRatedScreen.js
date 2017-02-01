import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  ScrollView
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import StatusBarArea from './StatusBar'
import Styles from './Styles'
import SingleItem from './container/SingleItem'
export default class TopRatedScreen extends Component {

  static navigationOptions = {
      tabBar: {
        label: 'Top Rated'
      }
    }

  render() {

    return (
      <View>
        <StatusBarArea/>

        <ScrollView>
          <SingleItem/>
          <SingleItem/>
          <SingleItem/>
        </ScrollView>
      </View>
    );
  }
}
