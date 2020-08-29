import React from 'react';
import { Link } from 'react-router-dom';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, ProductImage, Text, BoldText, PeriodText, LinkText } from '../style';
import SocialDockImage from '../../../images/product/HackU2020.png';
import LockSysImage from '../../../images/product/socialdock_tech.png';
import XdImage from '../../../images/product/xd.png';

export const SocialDock = () => {
  window.scrollTo(0, 0);

  return (
    <ContentContainer>
      <Container>
        <ProductImage src={SocialDockImage} />
        <Text>
          Open Hack U 2020 Onlineで作成したプロダクト。様々なSNSを一つのタイムラインで管理できる。
          リストを作成して、管理したいアカウント（Twitter、YouTube）を追加すれば追加したアカウントの最新の投稿がタイムラインに表示される。
        </Text>
        <PeriodText>製作期間： １週間</PeriodText>
        <PeriodText>製作人数：３人</PeriodText>
        <BoldText>URL</BoldText>
        <LinkText>
          <Link to={{ pathname: 'https://social-dock.web.app/' }} target="_blank" rel="noopener noreferrer">
            アプリURL
          </Link>
        </LinkText>
        <BoldText>技術スタック</BoldText>
        <ProductImage src={LockSysImage} />
        <BoldText>デザイン</BoldText>
        <LinkText>
          <Link
            to={{ pathname: 'https://xd.adobe.com/view/6edb17f7-8616-4cc0-bc6d-421171d70219-3b88/grid' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            デザイン(XD)URL
          </Link>
        </LinkText>
        <ProductImage src={XdImage} />
      </Container>
    </ContentContainer>
  );
};
