import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity ,Image ,TextInput  ,TouchableHighlight  , StatusBar ,ImageBackground,ActivityIndicator
 } from 'react-native';
import loginStyle from './styles/loginStyle';
import { StackNavigator } from 'react-navigation'; 
import { fetchLogin } from './connectRAE/path';

export default class Login extends Component {

    static defaultProps = {
        fetchLogin
    }

    static navigationOptions = {
        header: null,
    }

    state = {
        loading: false,
        user: []
    }
    
    constructor(props){
        super(props);
        background = require('../images/backgroundLogin.jpg');
        logo = require('./images/logo2017HappyNewYear.jpg');
        facebook = require('../images/icon/facebook.jpg');
        gmail = require('../images/icon/gmail.png');
        twitter = require('../images/icon/twitter.jpg');
        this.state = { user: [] };
    }

    async componentDidMount() {
        this.setState({ loading:true });
        const data = await this.props.fetchLogin();
        setTimeout(() => {
            this.setState({ loading: false , user: data.user })
        }, 2000);
    }

    onPress(){
        alert("Login");
    }

    render(){
        if(this.state.loading){
            return (
                <View>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return(
            <ImageBackground source={background} style={loginStyle.container}>
                <StatusBar hidden={true} />
                <View style={loginStyle.topContainer}>
                    <Image source={logo} style={loginStyle.logo}/>
                </View>
                <View style={loginStyle.bottomContainer}>
                <Text>{this.state.user}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={loginStyle.register}>REGISTER</Text>
                    </TouchableOpacity>
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