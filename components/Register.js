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
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pass: ''
    }

  }
  _registration() {

      var s= firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
        alert(error.message)
      });

  }
componentWillUnmount () {
  firebaseApp.auth().signOut().then(function() {
    // Sign-out successful.

  }, function(error) {
    // An error happened.
  });
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

        <TouchableOpacity style={styles.button} onPress={this._registration.bind(this)}>
              <Text style={styles.btntext}>
                Registration
              </Text>
            </TouchableOpacity>


        </View>
      </View>
    )
  }
}

styles = StyleSheet.create({
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
  }
})
