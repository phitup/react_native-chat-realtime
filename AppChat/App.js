import React, { Component } from 'react';
import {
  Platform
} from 'react-native';

//import Chat from './components/Chat';

// import Login from './components/Login';
// import Register from './components/Register';
// import Screen from './components/Screen/Screen';

// import Main from './components/Main/Main';
// import Drawer from './components/Screen/Drawer';

// import Logout from './components/Main/Drawer/Logout';
// import AccountInf from './components/Main/Drawer/AccountInf';
import Drawer from './components/Screen/Drawer';

// import Comment from './components/Social/Comment';

// import News from './components/News/news';

export default class App extends Component {

  render() {
    return (
      <Drawer />
    )
  }
}
