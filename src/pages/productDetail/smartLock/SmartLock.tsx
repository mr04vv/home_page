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
          研究室の昔ながらの鍵に嫌気がさし作成したプロダクト。ICカードリーダ、サーボモーター、ラズパイ２台、M5Stack、３Dプリンターを駆使し作成。
          登録済みのICカードをかざすと、鍵にくっついているサーボモータが回転し代わりに鍵を開けてくれる。開閉状態はM5Stackに表示されているのでひと目で確認ができる。
          MQTTを使用して常時監視しているのでリアルタイムで更新される。
        </Text>
        <PeriodText>製作期間： ３日（研究室で現在稼働中）</PeriodText>
        <PeriodText>製作人数：１人</PeriodText>
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
