import React, { Component } from 'react';
import {
  Platform
} from 'react-native';

//import Chat from './components/Chat';
// import Login from './components/Login';
// import Screen from './components/Screen/Screen';
import News from './components/News/news';

export default class App extends Component {

  render() {
    return (
      <News />
    )
  }
}
