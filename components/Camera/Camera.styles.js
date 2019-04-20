import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

export const SnapButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  border-radius: 50;
  background-color: ${props => props.theme.blue};
  height: 60;
  width: 60;
  margin-bottom: 30;
`;