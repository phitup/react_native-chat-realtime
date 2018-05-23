import React , { Component } from 'react';
import {View , Text , TouchableOpacity ,Image} from 'react-native';
import AccountInf from './AccountInf';

export default class Logout extends Component {

  static navigationOptions = {
    title: 'Log Out' ,
    drawerIcon:( 
            <Image source={require('../../../images/icon/home.png')} 
                style={{height:24 , width:24}}
            />
        )
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
        <View style={{flex:1 , backgroundColor:'lightpink' , justifyContent:'center' , alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{navigate('AccountInf')}}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
