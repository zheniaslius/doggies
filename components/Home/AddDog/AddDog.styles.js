import styled from 'styled-components';

import { Container } from '../../shared/components';

import { View, Text } from 'react-native';

export const FormContainer = styled(Container)`
  flex: 1;
  padding-left: 35px;
  padding-right: 35px;
`;

export const FormTop = styled(View)`
  margin-bottom: 25;
  flex-direction: row;
  justify-content: space-between;
`;

export const Dropdown = styled(View)`
  position: absolute;
  flex: 1;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const IconContainer = styled(View)`
  align-items: center;
`;

export const IconTitle = styled(Text)`
  margin-bottom: 5;
`;