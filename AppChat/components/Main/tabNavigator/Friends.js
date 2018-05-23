import React , { Component } from 'react';
import {View , Text , TouchableOpacity} from 'react-native';
import mainStyle from '../../styles/mainStyle';

export default class Friends extends Component {

  render(){

    return(
        <View style={mainStyle.container}>
            <Text style={mainStyle.text}>List Friends</Text>
        </View>
    );
  }
}
