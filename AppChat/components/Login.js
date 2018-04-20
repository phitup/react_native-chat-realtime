import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableOpacity ,Image ,TextInput ,ListView ,TouchableHighlight ,
    Picker , Item , StatusBar ,ImageBackground
 } from 'react-native';
import loginStyle from './styles/loginStyle.js';

export default class Login extends Component {

    constructor(props){
        super(props);
        background = require('../images/backgroundLogin.jpg');
        logo = require('./images/logo2017HappyNewYear.jpg');
        facebook = require('../images/icon/facebook.jpg');
        gmail = require('../images/icon/gmail.png');
        twitter = require('../images/icon/twitter.jpg');
    }

    onPress(){
        alert("Login");
    }

    render(){
        return(
            <ImageBackground source={background} style={loginStyle.container}>
                <StatusBar hidden={true} />
                <View style={loginStyle.topContainer}>
                    <Image source={logo} style={loginStyle.logo}/>
                </View>
                <View style={loginStyle.bottomContainer}>
                    <Text style={loginStyle.register}>REGISTER</Text>
                    <TextInput placeholder={'Username'} style={loginStyle.bottomText} underlineColorAndroid={'transparent'} />
                    <TextInput placeholder={'Password'} style={loginStyle.bottomText} secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                    <TouchableHighlight style={loginStyle.button} onPress={()=>{this.onPress()}}>
                        <Text style={loginStyle.buttonText}>Login</Text>
                    </TouchableHighlight>
                    <View style={loginStyle.connect}>
                        <View style={loginStyle.connectLine}></View>
                        <Text style={loginStyle.connectText}>OR WITH CONNECT</Text>
                        <View style={loginStyle.connectLine}></View>
                    </View>
                    <View style={loginStyle.connect}>
                        <View style={loginStyle.connects}>
                            <Image source={facebook} style={loginStyle.connectImage}/>
                            <Text style={loginStyle.connectsText}>Facebook</Text>
                        </View>
                        <View style={loginStyle.connects}>
                            <Image source={twitter} style={loginStyle.connectImage}/>
                            <Text style={loginStyle.connectsText}>Twitter</Text>
                        </View>
                        <View style={loginStyle.connects}>
                            <Image source={gmail} style={loginStyle.connectImage}/>
                            <Text style={loginStyle.connectsText}>Gmail</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}