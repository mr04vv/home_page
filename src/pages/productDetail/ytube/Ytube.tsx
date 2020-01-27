import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, ProductImage, Text, BoldText, PeriodText, TweetContainer } from '../style';
import YtubeImage from '../../../images/product/ytube.jpg';
import YtubeSiteImage from '../../../images/product/ytube-site.jpg';
import YtubeAuthImage from '../../../images/product/auth.jpg';

import { GithubLink } from '../../../components/GithubLink';

export const Ytube = () => {
  window.scrollTo(0, 0);
  return (
    <ContentContainer>
      <Container>
        <ProductImage src={YtubeImage} />
        <Text>
          Youtubeで活躍するゲーム実況者YY(わいわい)さんの好きなシーンを投稿するSNS。Youtube動画のURLと開始時間、終了時間を指定して投稿すると好きなシーンが再生されるように投稿される。検索機能もあるのでYoutubeで探さなくてもわいちゅーぶで見つかる！
        </Text>
        <PeriodText>製作期間：４日</PeriodText>
        <PeriodText>製作人数：１人</PeriodText>
        <BoldText>URL</BoldText>
        <GithubLink
          url="https://github.com/mr04vv/Ytube"
          name="mr04vv/Ytube"
          description="Contribute to mr04vv/Ytube development by creating an account on GitHub."
        />
        <TweetContainer>
          <TwitterTweetEmbed options={{ width: '100%' }} tweetId="1182350480082497537" />
        </TweetContainer>
        <BoldText>認証システム構成</BoldText>
        <ProductImage src={YtubeAuthImage} />
        <BoldText>サイト画像</BoldText>
        <ProductImage src={YtubeSiteImage} />
      </Container>
    </ContentContainer>
  );
};
