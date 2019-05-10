import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import AutoComplete from 'react-native-autocomplete-input';

import { Button, ButtonText,
Heading2 } from '../../shared/shared';

import {
  FormContainer,
  FormTop,
  Dropdown,
  IconContainer,
  IconTitle
} from './AddDog.styles'

export default class AddDog extends React.Component {
  constructor() {
    super();
    this.state = { 
      data: {
        name: '',
        photo: null,
        gender: '',
        breed: '',
        description: '',
      },
      breeds: [],
      query: ''
    };
  }

  componentDidMount() {
    this.getBreeds();
  }
  
  getBreeds = () => {
    axios({
      method: 'get',
      url: 'https://dog.ceo/api/breeds/list'
    })
      .then(res => this.setState({ breeds: res.data.message }));
  }

  handleChoosePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }

  findDog = query => {
    if (query === '') return [];

    const { breeds } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return breeds.filter(dog => dog.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const dogs = this.findDog(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <KeyboardAwareScrollView enableOnAndroid={true} keyboardShouldPersistTaps='always'>
      <FormContainer>
        <View style={{flex: 1}}>
          <Heading2 style={{marginBottom: 20, textAlign: "center"}}>Добавить в базу 🐕</Heading2>
          <FormTop>
            <IconContainer>
              <IconTitle>Фото</IconTitle>
              <TouchableOpacity onPress={this.handleChoosePhoto}>
                <MCIcon name="file-upload" style={{fontSize: 30, color: '#8ae1f3'}}/>
              </TouchableOpacity>
            </IconContainer>
            <IconContainer>
              <IconTitle>Пол</IconTitle>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => this.setState({ gender: 'male' })}
                  style={{marginRight: 5, borderWidth: 1, borderRadius: 5, borderColor: this.state.gender === 'male' ? '#8ae1f3' : 'transparent'}}>
                  <MCIcon name="gender-male" style={{fontSize: 30, color: '#8ae1f3'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ gender: 'female' })} 
                  style={{borderWidth: 1, borderRadius: 5, borderColor: this.state.gender === 'female' ? '#8ae1f3' : 'transparent'}}>
                  <MCIcon name="gender-female" style={{fontSize: 30, color: '#8ae1f3'}}/>
                </TouchableOpacity>
              </View>
            </IconContainer>
          </FormTop>
          <View style={{flexDirection: 'column'}}>
            <Input
              label='Кличка'
              containerStyle={{marginBottom: 10}}
            />
            <View style={{marginBottom: 70}}>
              <Dropdown>
                <AutoComplete 
                  defaultValue={query}
                  data={dogs.length === 1 && comp(query, dogs[0]) ? [] : dogs}
                  inputContainerStyle={{borderWidth: 0}}
                  keyExtractor={breed => breed}
                  renderSeparator={() => <View style={{margin: 20}} />}
                  renderTextInput={() => 
                    <Input
                      label='Порода'
                      autoCapitalize="none"
                      value={query}
                      autoCorrect={false}
                      onChangeText={text => this.setState({ query: text })}
                    />
                  }

                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => this.setState({ query: item })}>
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </Dropdown>
            </View>
            <Input
              label='Описание'
              containerStyle={{marginBottom: 10}}
            />
          </View>
          <Button style={{marginVertical: 20}}>
            <ButtonText>Добавить</ButtonText>
          </Button>
        </View>
      </FormContainer>
      </KeyboardAwareScrollView>
    )
  }
}
