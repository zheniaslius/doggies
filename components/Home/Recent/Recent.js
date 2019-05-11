import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';

import { Heading, Name } from '../../shared/shared';
import {
    Card,
    Breed,
    itemWidth,
    sliderWidth,
    slideHeight
} from './Recent.styles';


const Recent = ({ entries, navigation }) => {
  renderItem = ({item}) => {
      return (
        <TouchableNativeFeedback onPress={() => navigation.navigate('Details', {dog: item})}>
          <Card source={{uri: item.photo}} style={{height: slideHeight, marginRight: 20}}>
            <Breed>{ item.breed }</Breed>
            <Name>{ item.name }</Name>
          </Card>
        </TouchableNativeFeedback>
      );
  }

  return (
      <>
          <Heading>Недавние</Heading>
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={entries}
              renderItem={this.renderItem}
              sliderWidth={sliderWidth+15}
              itemWidth={itemWidth}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              contentContainerCustomStyle={{marginLeft:'-22%'}}
          />
      </>
  );
};

export default withNavigation(Recent);