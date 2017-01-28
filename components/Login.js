import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import firebaseApp from './Firebase'

export default class Login extends Component{
  constructor() {
    super()
    this.state = {
      email: '',
      pass: ''
    }
  }
_login() {
  firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  });
}
componentWillMount() {
      // Add listener here
      this.unsubscribe = firebaseApp.auth().onAuthStateChanged(user => {
        if (user) {
          Actions.Home(user)
        }
      });
  }
  componentWillUnmount() {
      // Add listener here
this.unsubscribe()
  }

  render() {
    return (
      <View style={styles.container}>
        <View >
          <TextInput
            onChangeText={(email)=> this.state.email = email}
            style={styles.login}
            placeholder="Your Email"
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            onChangeText={(pass)=> this.state.pass = pass}
            style={styles.login}
            placeholder="Your Password"
            secureTextEntry = {true}
          />

        <TouchableOpacity style={styles.button} onPress={this._login.bind(this)}>
              <Text style={styles.btntext}>
                Login
              </Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={Actions.Register} style={styles.button}>
          <Text style={styles.btntext}>
            Registration
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    padding:10
  },
  login : {
    justifyContent:'center',
    alignItems: 'stretch',
    height: 40,
    marginTop:20,
    backgroundColor:'#DDDFD3',
    padding:10
  },
  button: {
    justifyContent:'center',
    alignItems: 'center',
      backgroundColor:'#5FBD31',
      height: 40,
      marginTop:20,

  },
  btntext: {
    color:'#fff'
  },
  reg: {
    justifyContent:'center',
    alignItems: 'center',
    flex:1,
    textAlign: 'right'
  }
})
