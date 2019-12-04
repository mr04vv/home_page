import React from 'react';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, ProductImage, Text, BoldText, PeriodText } from '../style';
import CapybalifeImage from '../../../images/product/capybalife.jpg';
import CapybalifeTecImage from '../../../images/product/capytec.jpg';
import { SpeakerDeck } from '../../../components/SpeakerDeck';

export const Capybalife = () => {
  window.scrollTo(0, 0);
  return (
    <ContentContainer>
      <Container>
        <ProductImage src={CapybalifeImage} />
        <Text>
          freee株式会社のチーム開発インターンで作成したアプリ。「勤怠がしたくなる」をコンセプトにしたカピバラ集めゲーム型勤怠管理アプリ。勤怠状況によって様々な種類のカピバラが出現する。現在は非公開。
        </Text>
        <PeriodText>製作期間：約２週間</PeriodText>
        <PeriodText>製作人数：３人</PeriodText>
        <BoldText>技術スタック</BoldText>
        <ProductImage src={CapybalifeTecImage} />
        <BoldText>スライド</BoldText>
        <SpeakerDeck width="100%" height="100%" deckId="5012b311c75e423b82cb3715bdb2502b" />
      </Container>
    </ContentContainer>
  );
};
