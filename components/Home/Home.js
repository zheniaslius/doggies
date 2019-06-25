import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from '../shared/components';

import { Add, HomeWrapper } from './Home.styles';

import Recent from './Recent/Recent';
import Details from "../Details";
import All from './All/All';
import AddDog from './AddDog';

const { height: viewportHeight } = Dimensions.get('window');

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
            <Recent />
            <All />
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