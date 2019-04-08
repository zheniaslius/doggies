import React from 'react';
import { Text, Image } from 'react-native';
import { Container } from '../shared/shared'

const Details = ({ navigation }) => {
  const name = navigation.getParam('name');
  const photo = navigation.getParam('photo');

  return (
    <Container>
      <Image source={photo}/>
      <Text>
        {name}
      </Text>
    </Container>
  );
};

export default Details;