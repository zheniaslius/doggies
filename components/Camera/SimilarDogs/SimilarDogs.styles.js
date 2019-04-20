import styled from 'styled-components';
import { View, ImageBackground, Text }from 'react-native';

export const Container = styled(View)`
  flex: 1;
  padding: 20px 20px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
`;

export const Card = styled(ImageBackground)`
  border-radius: 8px;
  overflow: hidden;
  padding: 5px 10px;
`;

export const Breed = styled(Text)`
  color: white;
`;

export const Name = styled(Text)`
  color: white;
  font-weight: bold;
`;