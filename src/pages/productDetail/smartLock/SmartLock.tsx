/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, ProductImage, Text, BoldText, PeriodText, TweetContainer } from '../style';
import SmartLockImage from '../../../images/product/smartlock.jpg';
import LockSysImage from '../../../images/product/lock.jpg';

const { TwitterTweetEmbed } = require('react-twitter-embed');

export const SmartLock = () => {
  window.scrollTo(0, 0);

  return (
    <ContentContainer>
      <Container>
        <ProductImage src={SmartLockImage} />
        <Text>
          IoTハッカソンで制作した魔法の杖。杖の先についている９軸センサを用いてジェスチャを学習させ、ジェスチャを識別。
          識別されたジェスチャから紐付けられたアクティビティが起こる。ラズパイを用いてテレビの電源切替、エアコンの電源切替、LINE、Slackなどの送信が可能。
          また、ジェスチャとアクティビティはWebアプリを使えば自由に組み合わせを変更できる。
        </Text>
        <PeriodText>製作期間：２日（IoTのハッカソンにてヒューチャーアーキテクト章を受賞）</PeriodText>
        <PeriodText>製作人数：４人</PeriodText>
        <BoldText>技術スタック</BoldText>
        <ProductImage src={LockSysImage} />
        <BoldText>デモ動画</BoldText>
        <TweetContainer>
          <TwitterTweetEmbed options={{ width: '100%' }} tweetId="1048887468110442497" />
        </TweetContainer>
      </Container>
    </ContentContainer>
  );
};
