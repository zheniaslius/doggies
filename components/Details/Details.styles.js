import { View, Text } from 'react-native';
import styled, { css } from 'styled-components';
import { Name, GlobalText } from '../shared/components';

export const Container = styled(View)`
    padding: 25px 20px;
    border-radius: 20;
    margin-top: -20px;
    background-color: white;
`;

export const NameDark = styled(Name)`
  color: ${props => props.theme.black};
  margin-bottom: 25px;
`;

export const InfoWrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: flex-start;
`;

export const Column = styled(View)`
  padding: 0 20px;
  padding-left: ${props => props.noPadding ? 0 : 20};

  ${props => props.border && css`
    borderLeftColor: #eaeaea;
    borderLeftWidth: 1;
    borderRightColor: #eaeaea;
    borderRightWidth: 1;
  `};
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.theme.black};
`;

export const Value = styled(Text)`
  font-size: 16px;
  color: #7e7f86;
`;

export const Description = styled(Text)`
  line-height: 23;
  margin-bottom: 25px;
  color: #7e7f86;
`;
