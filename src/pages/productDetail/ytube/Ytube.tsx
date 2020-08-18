/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, ProductImage, Text, BoldText, PeriodText, TweetContainer, BadgeContainer } from '../style';
import YtubeImage from '../../../images/product/waikore1.png';
import YtubeAuthImage from '../../../images/product/auth.jpg';
import WaikoreImage2 from '../../../images/product/waikore2.png';
import WaikoreImage3 from '../../../images/product/waikore3.png';
import WaikoreImage4 from '../../../images/product/waikore4.png';

let isLoadwidgets = false;
export const Ytube = () => {
  window.scrollTo(0, 0);
  React.useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement('script');
      s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);
  return (
    <ContentContainer>
      <Container>
        <ProductImage src={YtubeImage} />
        <Text>
          Youtubeで活躍するゲーム実況者YY(わいわい)さんの好きなシーンを投稿するSNS。Youtube動画のURLと開始時間、終了時間を指定して投稿すると好きなシーンが再生されるように投稿される。検索機能もあるのでYoutubeで探さなくてもわいコレで見つかる！現在ユーザー数473人(ログイン済)
        </Text>
        <PeriodText>製作期間：４日(Web), ７日(App)</PeriodText>
        <PeriodText>製作人数：１人</PeriodText>
        <PeriodText>構成：バックエンド Rails, フロントエンド React×Typescript, アプリ Flutter</PeriodText>
        <BoldText>URL</BoldText>
        <BadgeContainer>
          <a
            href="https://apps.apple.com/jp/app/%E3%82%8F%E3%81%84%E3%82%B3%E3%83%AC/id1526785467?mt=8"
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
            href="https://play.google.com/store/apps/details?id=com.mooriii.yycollection&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          >
            <img
              width="155"
              alt="Google Play で手に入れよう"
              src="https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png"
            />
          </a>
        </BadgeContainer>

        <TweetContainer>
          {/* <TwitterTweetEmbed options={{ width: '100%' }} tweetId="1182350480082497537" /> */}
        </TweetContainer>
        <TweetContainer>
          <blockquote className="twitter-tweet">
            <a href="https://t.co/XPweHoawEt">pic.twitter.com/XPweHoawEt</a>
            <a href="https://twitter.com/akkun_dayooo/status/1182350480082497537?ref_src=twsrc%5Etfw">
              August 13, 2020
            </a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </TweetContainer>
        <TweetContainer>
          <blockquote className="twitter-tweet">
            <a href="https://t.co/XPweHoawEt">pic.twitter.com/XPweHoawEt</a>
            <a href="https://twitter.com/akkun_dayooo/status/1293744432265625601?ref_src=twsrc%5Etfw">
              August 13, 2020
            </a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </TweetContainer>

        <BoldText>認証システム構成</BoldText>
        <ProductImage src={YtubeAuthImage} />
        <BoldText>説明画像</BoldText>
        <ProductImage src={YtubeImage} />
        <div style={{ margin: '4px' }} />
        <ProductImage src={WaikoreImage2} />
        <div style={{ margin: '4px' }} />
        <ProductImage src={WaikoreImage3} />
        <div style={{ margin: '4px' }} />
        <ProductImage src={WaikoreImage4} />
      </Container>
    </ContentContainer>
  );
};
