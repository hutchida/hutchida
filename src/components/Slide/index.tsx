import React from 'react';
import { ISlide } from './types';
import { spacingMap, slideSizeMap, descriptionSizeMap } from './maps';
import { storyblokEditable } from "@storyblok/react";

import {
    Container, SlideItem, Title, Description
} from './styles';

export const Slide = ({ blok }: ISlide) => {
    return (
        <Container
            {...storyblokEditable(blok)}
            key={blok._uid}
            $spacing={spacingMap[blok.spacing]}>
            <SlideItem
                $imageUrl={blok.bgImage?.filename}
                $color={blok.bgColor}
                $slideWidth={slideSizeMap[blok.slideWidth]}
                $slideHeight={slideSizeMap[blok.slideHeight]}>
                {blok.title &&
                    <Title
                        $color={blok.bgColor}
                    >{blok.title}</Title>}
                {blok.description &&
                    <Description
                        $descriptionSize={descriptionSizeMap[blok.descriptionSize]}
                        $color={blok.bgColor}
                    >{blok.description}</Description>}
            </SlideItem>
        </Container>
    )
}

export default Slide