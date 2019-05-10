import styled from 'styled-components';
import { TouchableOpacity, View } from 'react-native';

export const Add = styled(TouchableOpacity)`
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 50;
  background-color: ${props => props.theme.blue};
  height: 60;
  width: 60;
  bottom: 30;
  right: 30;
  elevation: 5;
`;

export const HomeWrapper = styled(View)`
  position: relative;
  flex: 1;
`;