import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

export default class SingleItem extends Component{
  constructor() {
super()
  }

  render(){
    return(

      <View style={Styles.SingleMain}>
        <TouchableOpacity>

          <Image
            source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
            style={{width: 135, height: 220}}
          />
        </TouchableOpacity>

        <View style={{width:205,paddingLeft:10}}>
          <View>
              <Text style={Styles.title}>The Secret Life of Pets</Text>
            <View  style={Styles.span}>
              <Text style={{fontSize:12,color:'#757575',fontStyle:'italic'}}>Adventure</Text>
              <Text style={{paddingLeft:90,fontSize:12,marginTop:-3}}>2016 🗓</Text>
            </View>
          </View>

          <View style={Styles.excerpt}>
            <Text numberOfLines={5} style={{color:'#6B6B6B'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <View  style={Styles.moreInfo}>
            <TouchableOpacity style={{padding:12,backgroundColor:'#FDEF35'}}>
              <Text>
                More Info
              </Text>
            </TouchableOpacity>
            <Text style={{marginLeft:35,fontSize:20,backgroundColor:'#5FBD31',paddingLeft:15,paddingTop:7}}>5.8 ⭐️</Text>
          </View>
        </View>

      </View>
    )
  }
}
