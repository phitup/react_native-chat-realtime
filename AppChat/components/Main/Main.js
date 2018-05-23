import React, { Component } from 'react';
import {
    View, Text ,Button , Image ,TouchableOpacity
 } from 'react-native';
import mainStyle from '../styles/mainStyle';
import Question from './tabNavigator/Question';
import Friends from './tabNavigator/Friends';
import Message from './tabNavigator/Message';
import Master from './tabNavigator/Masters';
import TabNavigator from 'react-native-tab-navigator';

export default class Main extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerLeft: <Button title="Info" onPress={() => { navigation.navigate('DrawerOpen') }} />,
        headerBackTitle: null,
        drawerIcon:( 
            <Image source={require('../../images/icon/home.png')} 
                style={{height:24 , width:24}}
            />
        )
    });

    constructor(props){
        super(props);
        menu = require('../../images/icon/menu.png');
        this.state={
            selectedTab: 'Question',
        }   
    }

    render(){
        return(
            <View style={{flex:1}}>
            <View style={{flex:0.1, backgroundColor:'lightblue'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')} style={{height:33,width:33,backgroundColor:'lightgray', marginTop: 15, marginLeft: 10,}}>
                    <Image source={menu} style={{ margin:3 }} />
                </TouchableOpacity>
            </View>
            <View style={{flex:0.9}}>
                <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Question'}
                    title="Question"
                    renderIcon={() => <Image source={require('../../images/icon/icons-tabNavigator/question.png')} style={{width:22 , height:22 }}/>}
                    renderSelectedIcon={() => <Image source={require('../../images/icon/icons-tabNavigator/question_choose.png')} style={{width:22, height:22}}/>}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'Question' })}>
                    <Question />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Message'}
                    title="Message"
                    renderIcon={() => <Image source={require('../../images/icon/icons-tabNavigator/Message.png')} style={{width:22 , height:22 }}/>}
                    renderSelectedIcon={() => <Image source={require('../../images/icon/icons-tabNavigator/Message_choose.png')} style={{width:22, height:22}}/>}
                    onPress={() => this.setState({ selectedTab: 'Message' })}>
                    <Message />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Friends'}
                    title="Friends"
                    renderIcon={() => <Image source={require('../../images/icon/icons-tabNavigator/friends.png')} style={{width:22 , height:22 }}/>}
                    renderSelectedIcon={() => <Image source={require('../../images/icon/icons-tabNavigator/friends_choose.png')} style={{width:22, height:22}}/>}
                    onPress={() => this.setState({ selectedTab: 'Friends' })}>
                    <Friends />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Master'}
                    title="Master"
                    renderIcon={() => <Image source={require('../../images/icon/icons-tabNavigator/Masters.png')} style={{width:22 , height:22 }}/>}
                    renderSelectedIcon={() => <Image source={require('../../images/icon/icons-tabNavigator/Master_choose.png')} style={{width:22, height:22}}/>}
                    onPress={() => this.setState({ selectedTab: 'Master' })}>
                    <Master />
                </TabNavigator.Item>
                </TabNavigator>
            </View>
            </View>
        );
    }
}