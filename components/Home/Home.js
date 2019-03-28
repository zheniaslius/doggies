import React from 'react';
import { View, Text } from 'react-native';
import { Container, Heading } from '../shared/shared';
import Carousel from 'react-native-snap-carousel';
import { itemWidth, sliderWidth, slideHeight,
Card, Name, Breed } from './Home.styles';

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
  }
]

class Home extends React.Component {
  _renderItem ({item, index}) {
    return (
        <Card source={{uri: item.photo}} style={{height: slideHeight, marginRight: 20}}>
          <Breed>{ item.breed }</Breed>
          <Name>{ item.name }</Name>
        </Card>
    );
  }

    render() {
      return (
        <Container>
          <Heading>Недавние</Heading>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={entries}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth+15}
            itemWidth={itemWidth}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            contentContainerCustomStyle={{marginLeft:'-22%'}}
          />
        </Container>
      );
    }
  }
  
export default Home;