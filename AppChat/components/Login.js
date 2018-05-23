import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity ,Image ,TextInput  ,TouchableHighlight  , StatusBar ,ImageBackground,ActivityIndicator
 } from 'react-native';
import loginStyle from './styles/loginStyle';
import LoginComponent from './LoginComponents/LoginComponent';
import Register from './Register';
export default class Login extends Component {

    static navigationOptions = {
        header:null
    };
    
    constructor(props){
        super(props);
        background = require('../images/backgroundRegister.png');
        logo = require('../images/Logo/Logo.png');
        facebook = require('../images/icon/facebook.jpg');
        gmail = require('../images/icon/gmail.png');
        twitter = require('../images/icon/twitter.jpg');
        triangle = require('../images/icon/tam-giac.png');
        this.state ={
            isHidden: false
        }
        LOGIN = "LOGIN";
        REGISTER = "REGISTER";
    }

    onPress(){
        alert("Login");
    }

    showHidden() {
        this.setState({isHidden: !this.state.isHidden})
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground source={background} style={loginStyle.container}>
                <StatusBar hidden={true} />
                 <View style={loginStyle.topContainer}>
                    <Image source={logo} style={loginStyle.logo}/>
                </View> 
                <View style={loginStyle.bottomContainer}>
                {/* <Text>User</Text>  onPress={() => this.props.navigation.navigate('Register')} */}
                <TouchableOpacity onPress={() => this.showHidden()}>
                        <Text style={loginStyle.register}>{this.state.isHidden ? LOGIN : REGISTER}</Text>
                    </TouchableOpacity>
                        <Image source={triangle} style={{height:20 , width:20 ,alignSelf: 'flex-end', marginRight:20,marginBottom: 5,}} />
                    
                {this.state.isHidden ? <Register /> : <LoginComponent />}
                </View>
        </ImageBackground>
        );
    }
}