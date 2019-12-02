import React from 'react';
import { CardContainer, ButtonWrapper, CardImage, CardDescription, CardName } from './style';
import { CommonGreenButton } from '../../../../components/CommonButton';

interface Props {
  src: string;
  description: string;
  name: string;
}

export const ProductCard: React.SFC<Props> = ({ src, description, name }) => (
  <CardContainer>
    <CardImage src={src} />
    <CardName>{name}</CardName>
    <CardDescription>{description}</CardDescription>
    <ButtonWrapper>
      <CommonGreenButton>Show more</CommonGreenButton>
    </ButtonWrapper>
  </CardContainer>
);

export const DummyProductCard = () => <CardContainer />;
