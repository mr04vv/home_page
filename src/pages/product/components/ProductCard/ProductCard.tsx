import React from 'react';
import { CardContainer, ButtonWrapper, CardImage, CardDescription, CardName, CustomLink } from './style';
import { CommonGreenButton } from '../../../../components/CommonButton';
import { ProductContent } from '../../productContent';

export const ProductCard: React.SFC<ProductContent> = ({ src, description, name, url, buttonWord, isOuterLink }) => (
  <CardContainer>
    <CardImage src={src} />
    <CardName>{name}</CardName>
    <CardDescription>{description}</CardDescription>
    <ButtonWrapper>
      <CustomLink to={{ pathname: url }} target={isOuterLink ? '_blank' : ''} rel="noopener noreferrer">
        <CommonGreenButton>{buttonWord}</CommonGreenButton>
      </CustomLink>
    </ButtonWrapper>
  </CardContainer>
);

export const DummyProductCard = () => <CardContainer />;
