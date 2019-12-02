import React from 'react';
import {
  CardContainer,
  ButtonWrapper,
  CardImage,
  CardDescription,
  CardName,
  SimpleText,
  WeakText,
  CustomLink
} from './style';
import { WorkContent } from '../../workContent';
import { CommonBlueButton } from '../../../../components/CommonButton';

export const WorkCard: React.SFC<WorkContent> = ({ src, description, name, position, period, url }) => (
  <CardContainer>
    <CardImage src={src} />
    <CardName>{name}</CardName>
    <SimpleText>{position}</SimpleText>
    <WeakText>{period}</WeakText>
    <CardDescription>{description}</CardDescription>
    <CustomLink target="_blank" to={{ pathname: url }} rel="noopener noreferrer">
      <ButtonWrapper>
        <CommonBlueButton>企業ページへ</CommonBlueButton>
      </ButtonWrapper>
    </CustomLink>
  </CardContainer>
);

export const DummyWorkCard = () => <CardContainer />;
