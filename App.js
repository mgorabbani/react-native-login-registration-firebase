import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighLight,
  TextInput
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import TopRatedScreen from './components/TopRatedScreen'
import UpcomingScreen from './components/UpcomingScreen'
import NowPlayingScreen from './components/NowPlayingScreen'






const MyApp = TabNavigator({
  TopRated: {screen: TopRatedScreen},
  Upcoming: {screen: UpcomingScreen},
  NowPlaying: {screen: NowPlayingScreen}
}, {
  tabBarOptions: {

      upperCaseLabel: false,

      tabStyle: {
        backgroundColor:'#3F51B5',
        borderBottomWidth:0
      },
    
  },

});

AppRegistry.registerComponent('rreact', () => MyApp);
