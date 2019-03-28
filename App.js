import React from 'react';
import { 
  createAppContainer
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Font } from 'expo';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Camera from './components/Camera/Camera';
import { GlobalStyle } from './components/shared/shared';

const Navigator = createMaterialBottomTabNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({focused}) => (
        <MaterialIcon
          name={`home${focused ? '' : '-outline'}`}
          size={26} />
      )
    }
  },
  Camera: { 
    screen: Camera,
    navigationOptions: {
      tabBarIcon: ({focused}) => (
        <AntIcon
        name={`camera${focused ? '' : 'o'}`}
        size={26} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({focused}) => (
        <MatIcon
          name={`person${focused ? '' : '-outline'}`}
          size={26} />
      )
    }
   },
}, {
  initialRouteName: 'Home',
  barStyle: {
    backgroundColor: 'white'
  },
  labeled: false
});

const AppNavigator = createAppContainer(Navigator)

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Open Sans": require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ?
      <AppNavigator />
      : null;
  }
}
export default App;