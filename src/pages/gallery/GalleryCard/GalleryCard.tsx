import React from 'react';
import { CardContainer, ButtonWrapper, CardImage, CardName, CustomLink, WeakText } from './style';
import { CommonOrangeButton } from '../../../components/CommonButton/CommonButton';
import { GalleryContent } from '../galleryContent';

export const GalleryCard: React.SFC<GalleryContent> = ({ src, name, path, description }) => (
  <CardContainer>
    <CardImage src={src} />
    <CardName>{name}</CardName>
    <WeakText>{description}</WeakText>
    <ButtonWrapper>
      <CustomLink to={path}>
        <CommonOrangeButton>Show more</CommonOrangeButton>
      </CustomLink>
    </ButtonWrapper>
  </CardContainer>
);

export const DummyGalleyCard = () => <CardContainer />;
