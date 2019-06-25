import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';

import { Heading, Name } from '../../shared/components';
import { capitalize } from '../../../helpers/helpers';
import {
    Card,
    Breed,
    itemWidth,
    sliderWidth,
    slideHeight
} from './Recent.styles';


class Recent extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getDogs();
  }

  getDogs = async () => {
    const res = await axios.get('http://192.168.31.123:3000/dogs/new')
    this.setState({data: res.data});
  }

  renderItem = ({item}) => {
      return (
        <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Details', {dog: item})}>
          <Card source={{uri: item.photo}} style={{height: slideHeight, marginRight: 20}}>
            <Breed>{ capitalize(item.breed) }</Breed>
            <Name>{ item.name }</Name>
          </Card>
        </TouchableNativeFeedback>
      );
  }

  render() {
    return (
        <>
            <Heading>Недавние</Heading>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.data}
                renderItem={this.renderItem}
                sliderWidth={sliderWidth+15}
                itemWidth={itemWidth}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                contentContainerCustomStyle={{marginLeft:'-22.5%'}}
            />
        </>
    );
  }
};

export default withNavigation(Recent);