import React from 'react';
import { ISlide } from './types';
import { spacingMap, slideSizeMap, descriptionSizeMap } from './maps';

import {
    Container, SlideItem, Title, Description
} from './styles';

export const Slide = ({
    spacing,
    bgImage,
    bgColor,
    slideWidth,
    slideHeight,
    title,
    description,
    descriptionSize }: ISlide) => {
    return (
        <Container
            $spacing={spacingMap[spacing]}>
            <SlideItem
                $imageUrl={bgImage?.filename}
                $color={bgColor}
                $slideWidth={slideSizeMap[slideWidth]}
                $slideHeight={slideSizeMap[slideHeight]}>
                {title &&
                    <Title
                        $color={bgColor}
                    >{title}</Title>}
                {description &&
                    <Description
                        $descriptionSize={descriptionSizeMap[descriptionSize]}
                        $color={bgColor}
                    >{description}</Description>}
            </SlideItem>
        </Container>
    )
}

export default Slide