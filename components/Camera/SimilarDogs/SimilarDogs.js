import React, { Component } from 'react';
import { Image, View, FlatList,
ImageBackground, Text, ScrollView,
TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Heading2, Action } from '../../shared/shared';

import {
  Wrapper,
  ImageWrapper,
  Container,
  Card,
  Breed,
  Name
} from './SimilarDogs.styles';

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

class SimilarDogs extends Component {
  render() {
    const { navigation } = this.props;
    const photo = navigation.getParam('photo');
    
    return (
      <Wrapper>
        <ImageWrapper>
          <Image source={{uri: photo.uri}} style={{flex: 1}} />
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Profile')}>
            <Action style={{transform: [{translateY: 18}], bottom: 0, zIndex: 10}}>
              <Text><Icon name="add" color="#8ae1f3" size={35} /></Text>
            </Action>
          </TouchableNativeFeedback>
        </ImageWrapper>
        <Container>
          <Heading2 style={{marginBottom: 15}}>Похожие</Heading2>
          <ScrollView style={{marginRight: -20}}>
            <FlatList
              data={entries}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListFooterComponent={() => <View style={{marginLeft: 20}}/>}
              ItemSeparatorComponent={() => <View style={{marginHorizontal: 7}} />}
              keyExtractor={dog => dog.name}
              renderItem={({ dog }) => (
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Details', {dog})}>
                  <Card source={{uri: item.photo}} style={{width: 110, height: 140, flexDirection: 'column', justifyContent: 'flex-end'}}>
                    <Breed>{item.breed}</Breed>
                    <Name>{item.name}</Name>
                  </Card>
                </TouchableWithoutFeedback>
              )}
            />
          </ScrollView>
        </Container>
      </Wrapper>
    )
  }
}

export default SimilarDogs;