import styled from 'styled-components';
import { View, Text, TouchableHighlight } from 'react-native';

export const Container = styled(View)`
    padding: 45px 15px 0;
`;

export const GlobalText = styled(Text)`
    font-family: 'Open Sans';
`;

export const Heading = styled(GlobalText)`
    font-size: 36;
    font-weight: bold;
    margin-bottom: 15;
    color: ${props => props.theme.blackDark};
`;

export const Heading2 = styled(GlobalText)`
    font-size: 26px;
    font-weight: bold;
    color: ${props => props.theme.blackDark};
`;

export const Name = styled(GlobalText)`
    font-size: 32;
    font-weight: bold;
    color: white;
`;

export const Action = styled(View)`
  border-radius: 50;
  background-color: white;
  height: 60;
  width: 60;
  align-self: flex-end;
  position: absolute;
  right: 30px;
  elevation: 5;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(TouchableHighlight)`
  background-color: #8ae1f3;
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(GlobalText)`
  font-weight: bold;
  color: white;
  font-size: 16px;
`;