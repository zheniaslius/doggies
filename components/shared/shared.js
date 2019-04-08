import styled from 'styled-components';
import { View, Text } from 'react-native';

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
`;

export const Heading2 = styled(GlobalText)`
    font-size: 26px;
    font-weight: bold;
`;