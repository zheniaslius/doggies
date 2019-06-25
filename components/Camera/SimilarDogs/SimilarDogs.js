import React, { Component } from 'react';
import { Image, View, FlatList,
ActivityIndicator, Text, ScrollView,
TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

import { Heading2, Action } from '../../shared/components';
import { capitalize } from '../../../helpers/helpers';

import {
  Wrapper,
  ImageWrapper,
  Container,
  Card,
  Breed,
  Name
} from './SimilarDogs.styles';

DogList = ({ data, navigation }) => {
  if (!data.length) return <Text>Совпадений не найдено</Text>
  return (
    <ScrollView style={{marginRight: -20}}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={() => <View style={{marginLeft: 20}}/>}
          ItemSeparatorComponent={() => <View style={{marginHorizontal: 7}} />}
          keyExtractor={dog => dog.name}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', {dog: item})}>
              <Card source={{uri: item.photo}} style={{width: 110, height: 140, flexDirection: 'column', justifyContent: 'flex-end'}}>
                <Breed>{capitalize(item.breed)}</Breed>
                <Name>{item.name}</Name>
              </Card>
            </TouchableWithoutFeedback>
          )}
        />
      </ScrollView>
  )
}

class SimilarDogs extends Component {
  state = {
    data: [],
    loading: true
  }

  componentDidMount() {
    this.handleUploadPhoto();
  }

  handleUploadPhoto = async () => {
    const { navigation } = this.props;
    const photo = navigation.getParam('photo');

    const data = new FormData();
    data.append('dog', { uri: photo.uri, type: 'image/jpeg', name: 'image' });

    const res = await axios({
      method: 'post',
      url: 'http://192.168.31.123:3000/dogs/similar',
      data,
    })
    this.setState({ data: res.data, loading: false });
  };

  render() {
    const { navigation } = this.props;
    const { data, loading } = this.state;
    const photo = navigation.getParam('photo');
    
    return (
      <Wrapper>
        <ImageWrapper>
          <Image source={{uri: photo.uri}} style={{flex: 1}} />
          <TouchableNativeFeedback>
            <Action style={{transform: [{translateY: 18}], bottom: 0, zIndex: 10}}>
              <Text><Icon name="add" color="#8ae1f3" size={35} /></Text>
            </Action>
          </TouchableNativeFeedback>
        </ImageWrapper>
        <Container>
          <Heading2 style={{marginBottom: 15}}>Похожие</Heading2>
          {loading
            ? <View style={{height: 140, justifyContent: 'center'}}>
                <ActivityIndicator size="large" color="#8ae1f3" />
              </View>
            : <DogList data={data} navigation={navigation}/>
          }
      </Container>
      </Wrapper>
    )
  }
}

export default SimilarDogs;