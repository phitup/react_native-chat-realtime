import React, { Component } from 'react';
import { Image , StyleSheet , Text} from 'react-native';
import { DrawerNavigator , DrawerItems } from 'react-navigation';
import Main from '../Main/Main';
import AccountInf from '../Main/Drawer/AccountInf';
import Logout from '../Main/Drawer/Logout';
import { Container , Header , Body , Content , Icon} from 'native-base';

const CustomDrawerContentComponent = (props) => (
    <Container>
      <Header  {...props} style={{ height:100}}>
        <Body style={{flexDirection: 'row'}}>
          <Image style={styles.drawerImage} source={require('../images/imageUser.jpg')} />
          <Text style={styles.text}>Phi Tup</Text>
        </Body>
      </Header>
      <Content>
      <DrawerItems {...props} />
    </Content>
    </Container>
    
)

export const SideMenu = DrawerNavigator({
  Home:{
    screen: Main
  },
  AccountInf:{
    screen: AccountInf
  },
  Logout:{
    screen: Logout
  }
},
  {
    initialRouteName: 'Home',
    drawerWidth: 230,
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    //contentComponent: props => <Menu />
  }
);

 export default SideMenu;

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerImage:{
    height:50,
    width:50,
    borderRadius: 100,
    marginLeft: 5,
    marginTop: 20,
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    marginTop: 35,
    marginLeft: 5
  }
});
