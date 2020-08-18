/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, ProductImage, Text, BoldText, PeriodText, TweetContainer, BadgeContainer } from '../style';
import PoskoreImage1 from '../../../images/product/postCollection.png';
import PoskoreImage2 from '../../../images/product/postCollection2.png';
import PoskoreImage3 from '../../../images/product/postCollection3.png';
import PoskoreImage4 from '../../../images/product/postCollection4.png';

export const PostCollection = () => {
  window.scrollTo(0, 0);
  const [isLoadwidgets, setIsLoad] = useState<boolean>(false);
  React.useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement('script');
      s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      document.body.appendChild(s);
      setIsLoad(true);
    }
  }, [isLoadwidgets]);

  return (
    <ContentContainer>
      <Container>
        <ProductImage src={PoskoreImage1} />
        <Text>
          YouTube動画の好きなシーンやお気に入りのツイートを管理するためのアプリ。タグで管理したり検索できたりするので埋もれる心配がなくなります。
        </Text>
        <PeriodText>製作期間：４日</PeriodText>
        <PeriodText>製作人数：１人</PeriodText>
        <BoldText>URL</BoldText>
        <BadgeContainer>
          <a
            href="https://apps.apple.com/jp/app/%E3%81%BD%E3%81%99%E3%82%B3%E3%83%AC/id1527047803?mt=8"
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              background:
                'url(https://linkmaker.itunes.apple.com/ja-jp/badge-lrg.svg?releaseDate=2020-08-12&kind=iossoftware&bubble=ios_apps) no-repeat',
              width: '135px',
              height: '40px',
            }}
          />
          <a
            style={{ marginTop: '-10px' }}
            href="https://play.google.com/store/apps/details?id=com.mooriii.PostCollection&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          >
            <img
              width="155"
              alt="Google Play で手に入れよう"
              src="https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png"
            />
          </a>
        </BadgeContainer>
        <TweetContainer>
          <blockquote className="twitter-tweet">
            <a href="https://t.co/XPweHoawEt">pic.twitter.com/XPweHoawEt</a>
            <a href="https://twitter.com/akkun_dayooo/status/1295615895402758145?ref_src=twsrc%5Etfw">
              August 13, 2020
            </a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </TweetContainer>

        <BoldText>説明画像</BoldText>
        <ProductImage src={PoskoreImage1} />
        <div style={{ margin: '4px' }} />
        <ProductImage src={PoskoreImage2} />
        <div style={{ margin: '4px' }} />
        <ProductImage src={PoskoreImage3} />
        <div style={{ margin: '4px' }} />
        <ProductImage src={PoskoreImage4} />
      </Container>
    </ContentContainer>
  );
};
