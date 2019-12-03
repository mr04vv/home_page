/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, ProductImage, Text, BoldText, PeriodText } from '../style';
import CapybalifeImage from '../../../images/product/capybalife.jpg';
import CapybalifeTecImage from '../../../images/product/capytec.jpg';

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
        <div
          style={{
            left: 0,
            width: '80%',
            height: '80%',
            position: 'relative',
            paddingBottom: '56.1987%',
            margin: '10px auto'
          }}
        >
          <iframe
            src="//speakerdeck.com/player/5012b311c75e423b82cb3715bdb2502b"
            style={{ border: 0, top: 0, left: 0, width: '100%', height: '80%', position: 'absolute' }}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </Container>
    </ContentContainer>
  );
};
