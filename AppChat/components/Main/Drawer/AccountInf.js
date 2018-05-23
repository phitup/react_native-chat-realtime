import React , { Component } from 'react';
import {View , Text , TouchableOpacity ,Image} from 'react-native';


export default class AccountInf extends Component {

    static navigationOptions = {
        title: 'Account Information',
        drawerIcon:( 
            <Image source={require('../../../images/icon/home.png')} 
                style={{height:24 , width:24}}
            />
        )
    };

  render(){

    return(
        <View style={{flex:1 , backgroundColor:'lightgreen' , justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{ this.props.navigation.goBack()}}>
          <Text>Account Information</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
