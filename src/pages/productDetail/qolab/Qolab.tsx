/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { ContentContainer } from '../../../components/ContentContainer';
import {
  Container,
  BoldText,
  VideoContainer,
  LinkText,
  PeriodText,
  Text,
  ProductImage,
  ProductSmallImage
} from '../style';
import QolabImage from '../../../images/product/qolab.jpg';
import QolabSysImage from '../../../images/product/qolabSys.jpg';

import DomainImage from '../../../images/product/domain.png';
import AppImage from '../../../images/product/app.png';
import { GithubLink } from '../../../components/GithubLink';

export const Qolab = () => {
  window.scrollTo(0, 0);
  return (
    <ContentContainer>
      <Container>
        <ProductImage src={QolabImage} />
        <Text>
          研究室生活改善を目的とした日常の活動データ収集＆可視化アプリケーション。バックグラウンドで動くMacのネイティブアプリから様々なデータを送信しWebサイト上で可視化する。センサと紐付けて環境データを見ることも可能。
        </Text>
        <PeriodText>製作期間：２週間</PeriodText>
        <PeriodText>製作人数：５人</PeriodText>
        <BoldText>URL</BoldText>
        <GithubLink
          url="https://github.com/jphacks/TK_1917"
          name="jphacks/TK_1917"
          description="Contribute to jphacks/TK_1917 development by creating an account on GitHub."
        />
        <LinkText>
          <Link to={{ pathname: 'https://github.com/jphacks/TK_1917' }} target="_blank" rel="noopener noreferrer">
            GithubURL
          </Link>
        </LinkText>
        <LinkText>
          <Link to={{ pathname: 'https://qolab-a0324.web.app/' }} target="_blank" rel="noopener noreferrer">
            アプリURL
          </Link>
        </LinkText>
        <BoldText>グラフ例</BoldText>
        <ProductImage src={DomainImage} />
        <ProductSmallImage src={AppImage} />
        <BoldText>技術スタック</BoldText>
        <ProductImage src={QolabSysImage} />
        <BoldText>デモ動画</BoldText>
        <VideoContainer>
          <ReactPlayer
            width="100%"
            height={window.innerWidth < 420 ? '300px' : '500px'}
            controls
            url="https://www.youtube.com/watch?v=fjX5L1rCczo&feature=youtu.be"
          />
        </VideoContainer>
        <VideoContainer>
          <ReactPlayer
            width="100%"
            height={window.innerWidth < 420 ? '300px' : '500px'}
            controls
            url="https://www.youtube.com/watch?v=BqUwHnkk4zE"
          />
        </VideoContainer>
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
            src="//speakerdeck.com/player/bf0b94ad657243e89cfe8ed050db9b2e"
            style={{ border: 0, top: 0, left: 0, width: '100%', height: '80%', position: 'absolute' }}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </Container>
    </ContentContainer>
  );
};
