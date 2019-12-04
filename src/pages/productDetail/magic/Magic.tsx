import React from 'react';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, ProductImage, Text, BoldText, PeriodText, TweetContainer } from '../style';
import MagicImage from '../../../images/product/tue.jpg';
import MagicSysImage from '../../../images/product/tue2.jpg';
import { SpeakerDeck } from '../../../components/SpeakerDeck';

const { TwitterTweetEmbed } = require('react-twitter-embed');

export const Magic = () => {
  window.scrollTo(0, 0);

  return (
    <ContentContainer>
      <Container>
        <ProductImage src={MagicImage} />
        <Text>
          IoTハッカソンで制作した魔法の杖。杖の先についている９軸センサを用いてジェスチャを学習させ、ジェスチャを識別。
          識別されたジェスチャから紐付けられたアクティビティが起こる。ラズパイを用いてテレビの電源切替、エアコンの電源切替、LINE、Slackなどの送信が可能。
          また、ジェスチャとアクティビティはWebアプリを使えば自由に組み合わせを変更できる。
        </Text>
        <PeriodText>製作期間：２日（IoTのハッカソンにてヒューチャーアーキテクト章を受賞）</PeriodText>
        <PeriodText>製作人数：４人</PeriodText>
        <BoldText>技術スタック</BoldText>
        <ProductImage src={MagicSysImage} />
        <BoldText>デモ動画</BoldText>
        <TweetContainer>
          <TwitterTweetEmbed options={{ width: '100%' }} tweetId="1073504922010759168" />
        </TweetContainer>
        <BoldText>スライド</BoldText>
        <SpeakerDeck width="100%" height="100%" deckId="7c5e000569ee43cca46825a5d1752047" />
      </Container>
    </ContentContainer>
  );
};
