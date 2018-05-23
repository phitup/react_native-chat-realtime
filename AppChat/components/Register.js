import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity ,Image ,TextInput  ,TouchableHighlight  , StatusBar ,ImageBackground
 } from 'react-native';
import loginStyle from './styles/loginStyle';

export default class Login extends Component {

    onPress(){
        alert("Register Success");
    }

    render(){
        return(
            <View>
                    <TextInput placeholder={'Email'} style={loginStyle.bottomText} underlineColorAndroid={'transparent'}/>
                    <TextInput placeholder={'Phone Number'} style={loginStyle.bottomText} underlineColorAndroid={'transparent'}/>
                    <TextInput placeholder={'Username'} style={loginStyle.bottomText} underlineColorAndroid={'transparent'}/>
                    <TextInput placeholder={'Password'} style={loginStyle.bottomText} secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                    <TouchableHighlight style={loginStyle.button} onPress={()=>{this.onPress()}}>
                        <Text style={loginStyle.buttonText}>REGISTER</Text>
                    </TouchableHighlight>
            </View>
        );
    }
}