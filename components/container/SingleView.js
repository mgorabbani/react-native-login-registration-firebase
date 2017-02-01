import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

export default class SingleView extends Component{
  constructor() {
super()
  }

  render(){
    return(

      <View style={{width:140}}>
        <TouchableOpacity>

          <Image
            source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
            style={{width: 130, height: 220}}
          />
        </TouchableOpacity>
          <View>
              <Text style={Styles.title}>The Secret Life of Pets</Text>
            <View  style={Styles.span}>
              <Text style={{fontSize:12,color:'#757575',fontStyle:'italic'}}>Adventure</Text>
              <Text style={{fontSize:12,marginTop:-3}}>2016 🗓</Text>
            </View>
          </View>
        </View>
    )
  }
}
