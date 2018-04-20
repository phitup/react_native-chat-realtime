import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableOpacity ,Image ,TextInput ,ListView ,TouchableHighlight ,
    Picker , Item , StatusBar ,ImageBackground
 } from 'react-native';
import loginStyle from './styles/registerStyle';

export default class Login extends Component {

    constructor(props){
        super(props);
        background = require('../images/backgroundRegister.png');
    }

    onPress(){
        alert("Success");
    }

    render(){
        return(
            <ImageBackground source={background} style={loginStyle.container}>
                <StatusBar hidden={true} />
                <View style={loginStyle.bottomContainer}>
                    <TextInput placeholder={'Username'} style={loginStyle.bottomText} underlineColorAndroid={'transparent'} />
                    <TextInput placeholder={'Password'} style={loginStyle.bottomText} secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                    <TextInput placeholder={'Confirm Password'} style={loginStyle.bottomText} secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                    <TouchableHighlight style={loginStyle.button} onPress={()=>{this.onPress()}}>
                        <Text style={loginStyle.buttonText}>REGISTER</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        );
    }
}