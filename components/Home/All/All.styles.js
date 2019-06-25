import styled from 'styled-components';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { Heading2 } from '../../shared/components';

export const Title = styled(Heading2)`
    margin: 40px 0 15px;
`;

export const Wrapper = styled(View)`
    margin: 0 -10px;
`;

export const CardWrapper = styled(TouchableOpacity)`
    flex: 1;
    margin: 0 8px;
`;

export const Card = styled(ImageBackground)`
    border-radius: 10;
    overflow: hidden;
    height: 100px;
    justify-content: flex-end;
    elevation: 2;
`;

export const Name = styled(Text)`
    color: ${props => props.theme.black};
    font-weight: 600;
`;

export const Content = styled(View)`
    margin-top: 10px;
    background-color: white;
    padding: 2px 10px 5px;
    justify-content: space-between;
    flex-direction: row;
    align-items: baseline;
`;

export const EmptyCell = styled(View)`
    margin: 0 8px;
    flex: 1;
    background-color: transparent;
`;