import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from '../shared/shared';

import { Add, HomeWrapper } from './Home.styles';

import Recent from './Recent/Recent';
import Details from "../Details";
import All from './All/All';
import AddDog from './AddDog';

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
    name: 'Bobby',
    breed: 'Mau',
    photo: 'https://images.unsplash.com/photo-1530394168616-16a229c8c12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Johny',
    breed: 'Mau',
    photo: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Leo',
    breed: 'Mau',
    photo: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
  }
]

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isActionButtonVisible: true
    }
    this._listViewOffset = 0;
  }

  _onScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y
    const direction = (currentOffset > 0 && currentOffset > this._listViewOffset)
      ? 'down'
      : 'up'
    const isActionButtonVisible = direction === 'up'
    if (isActionButtonVisible !== this.state.isActionButtonVisible) {
      this.setState({ isActionButtonVisible })
    }
    this._listViewOffset = currentOffset
  }

  render() {
    const { isActionButtonVisible } = this.state;
    const { navigation } = this.props;

    return (
      <HomeWrapper>
        <ScrollView style={{height: viewportHeight}} onScroll={this._onScroll}>
          <Container>
            <Recent entries={entries}/>
            <All entries={entries} />
          </Container>
        </ScrollView>
        {isActionButtonVisible && 
          <Add onPress={() => navigation.navigate('AddDog')}>
            <Icon name="add" style={{fontSize: 30, color: 'white'}}/>
          </Add>
        }
      </HomeWrapper>
    );
  }
  }
  
const Navigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Details: {
    screen: Details
  },
  AddDog: {
    screen: AddDog
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
})

export default Navigator;