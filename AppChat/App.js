import React, { Component } from 'react';
import {
  Platform
} from 'react-native';

//import Chat from './components/Chat';
// import Login from './components/DemoLogin';
import Login from './components/Login';
//import Register from './components/Register';

export default class App extends Component {

  render() {
    return (
      <Login />
    )
  }
}
