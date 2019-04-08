import styled from 'styled-components';
import { ImageBackground, View, Text } from 'react-native';
import { Heading2 } from '../../shared/shared';

export const Title = styled(Heading2)`
    margin: 40px 0 15px;
`;

export const Wrapper = styled(View)`
    margin: 0 -10px;
`;

export const Card = styled(ImageBackground)`
    border-radius: 15;
    overflow: hidden;
    height: 100px;
    flex: 1;
    margin: 0 8px;
    justify-content: flex-end;
`;

export const Name = styled(Text)``;

export const Content = styled(View)`
    margin-top: 10px;
    background-color: white;
    padding: 2px 10px 5px;
    justify-content: space-between;
    flex-direction: row;
    align-items: baseline;
`;