import styled from 'styled-components';
import { View, ImageBackground, Text }from 'react-native';

export const Wrapper = styled(View)`
  flex: 1;
`;

export const ImageWrapper = styled(View)`
  flex: 1;
  position: relative;
`;

export const Container = styled(View)`
  padding: 20px 20px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  margin-top: -14px;
`;

export const Card = styled(ImageBackground)`
  border-radius: 8px;
  overflow: hidden;
  padding: 5px 10px;
`;

export const Breed = styled(Text)`
  color: white;
  margin-bottom: -5px;
`;

export const Name = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;