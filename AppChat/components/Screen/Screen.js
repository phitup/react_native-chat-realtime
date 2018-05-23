import { StackNavigator } from 'react-navigation';
import Login from '../Login';
import Register from '../Register';

const Screen = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

 export default Screen;