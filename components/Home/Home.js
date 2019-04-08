import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { 
  createStackNavigator
} from 'react-navigation';
import { createAppContainer } from 'react-navigation';

import { Container } from '../shared/shared';
import Recent from './Recent/Recent';
import Details from "../Details";
import All from './All/All';

const { height: viewportHeight } = Dimensions.get('window');

const entries = [
  {
    name: 'Mailo',
    breed: 'Border Collie',
    photo: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Doggy',
    breed: 'Pug',
    photo: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
  },
  {
    name: 'Gusya',
    breed: 'Mau',
    photo: 'https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Gusya',
    breed: 'Mau',
    photo: 'https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Gusya',
    breed: 'Mau',
    photo: 'https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  }
]

class Home extends React.Component {
    render() {
      return (
        <>
          <ScrollView style={{height: viewportHeight}}>
            <Container>
              <Recent entries={entries}/>
              <All entries={entries}/>
            </Container>
          </ScrollView>
        </>
      );
    }
  }
  
const Navigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Details: {
    screen: Details
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
})

const StackNavigator = createAppContainer(Navigator);

export default StackNavigator;