import { Dimensions, ImageBackground } from 'react-native';
import styled from 'styled-components';
import { GlobalText } from '../shared/shared';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideWidth = wp(45);
const itemHorizontalMargin = wp(4);

export const sliderWidth = viewportWidth-30;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
export const slideHeight = viewportHeight * 0.45;

export const Card = styled(ImageBackground)`
    border-radius: 15;
    overflow: hidden;
    height: slideHeight;
    justify-content: flex-end;
    padding: 15px 20px;
`;

export const Name = styled(GlobalText)`
    font-size: 32;
    font-weight: bold;
    color: white;
`;

export const Breed = styled(GlobalText)`
    font-size: 18;
    color: white;
    margin-bottom: -7px;
`;
