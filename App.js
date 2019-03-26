import React from 'react';
import { 
  createAppContainer
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Camera from './components/Camera/Camera';

const Navigator = createMaterialBottomTabNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" color={tintColor} size={32} />
      )
    }
  },
  Camera: { 
    screen: Camera,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="camera-alt" color={tintColor} size={32} />
      )
    }
  },
  Profile: { screen: Profile },
}, {
  initialRouteName: 'Home',
  activeColor: 'black',
  barStyle: {
    // backgroundColor: 'transparent'
  },
  labeled: false
});

const App = createAppContainer(Navigator)

export default App;