import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity ,Image ,TextInput  ,TouchableHighlight  , StatusBar ,ImageBackground,ActivityIndicator
 } from 'react-native';
import loginStyle from '../styles/loginStyle';

export default class LoginComponent extends Component {
render(){
    return(
        <View>
                    <TextInput placeholder={'Username'} style={loginStyle.bottomText} underlineColorAndroid={'transparent'}/>
                    <TextInput placeholder={'Password'} style={loginStyle.bottomText} secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                    <TouchableHighlight style={loginStyle.button} onPress={()=>{this.onPress()}}>
                        <Text style={loginStyle.buttonText}>LOGIN</Text>
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
    );
}
}