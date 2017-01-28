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

import {Scene, Router} from 'react-native-router-flux';


const styles = require('./styles.js')
const StatusBar = require('./components/StatusBar');

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
export default class rreact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newToDo: 'Hello',

    }
  }

  render() {
      return (
      <Router>
       <Scene key="root">
         <Scene key="Login" component={Login} title="Login" hideNavBar={true} initial/>
         <Scene key="Register" component={Register} title="Register" hideNavBar={false}/>
         <Scene key="Home" component={Home} title="Home" hideNavBar={false} />

       </Scene>
     </Router>
    );
  }
}


AppRegistry.registerComponent('rreact', () => rreact);
