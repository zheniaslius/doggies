import React from 'react';
import { Text, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  NameDark,
  InfoWrapper,
  Column,
  Title,
  Value,
  Description,
  Button,
  ButtonText,
  Call
} from './Details.styles';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Details = ({ navigation }) => {
  const name = navigation.getParam('name');
  const photo = navigation.getParam('photo');
  const breed = navigation.getParam('breed');

  return (
    <ScrollView>
      <Image source={{uri: photo}} style={{width: viewportWidth, height: viewportHeight/2}} />
      <Container>
        <NameDark>{name}</NameDark>
        <Call style={{transform: [{translateY: -30}]}}>
          <Text><Icon name="phone" color="#8ae1f3" size={35} /></Text>
        </Call>
        <InfoWrapper>
          <Column noPadding>
            <Title>Порода</Title>
            <Value>{breed}</Value>
          </Column>
          <Column border>
            <Title>Размер</Title>
            <Value>Medium</Value>
          </Column>
          <Column>
            <Title>Возраст</Title>
            <Value>1 год</Value>
          </Column>
        </InfoWrapper>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex recusandae odit expedita quis ut veritatis magni assumenda illo voluptates deleniti! Aliquam consequuntur ratione dolor repellendus, fuga in quo amet distinctio commodi. Autem corrupti voluptates ipsa libero placeat vero aliquid delectus.
        </Description>
        <Button>
          <ButtonText>Написать</ButtonText>
        </Button>
      </Container>
    </ScrollView>
  );
};

export default Details;