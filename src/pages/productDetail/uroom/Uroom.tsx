import React from 'react';
import { Link } from 'react-router-dom';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, ProductImage, Text, BoldText, LinkText, PeriodText } from '../style';
import UroomImage from '../../../images/product/uroomTop.jpg';
import UroomGif from '../../../images/product/uroom.gif';
import { GithubLink } from '../../../components/GithubLink';

export const Uroom = () => {
  window.scrollTo(0, 0);
  return (
    <ContentContainer>
      <Container>
        <ProductImage src={UroomImage} />
        <Text>
          朝忙しいときや、化粧し忘れたとき、どうしても出なきゃいけないミーティング。
          でも表情見えなきゃ伝わらないし…。このような課題を解決すべく開発したビデオチャットアプリ。
          カメラから得られた顔の輪郭情報から口の動きや首の動きなどをトラッキングして、二次元キャラクターをアバターとして使用できる。
        </Text>
        <PeriodText>製作期間：１日（REDIMPULZさん主催のWebRTCハッカソンで最優秀賞を獲得）</PeriodText>
        <PeriodText>製作人数：４人</PeriodText>
        <BoldText>URL</BoldText>
        <GithubLink
          url="https://github.com/mr04vv/uroom"
          name="mr04vv/uRoom"
          description="アバターでビデオチャットができるWebアプリ. Contribute to mr04vv/uRoom development by creating an account on GitHub."
        />
        <LinkText>
          <Link to={{ pathname: 'https://uroom-49e1a.firebaseapp.com/' }} target="_blank" rel="noopener noreferrer">
            アプリURL
          </Link>
        </LinkText>

        <BoldText>デモGIF</BoldText>
        <ProductImage src={UroomGif} />
      </Container>
    </ContentContainer>
  );
};
