import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, ProductImage, Text, BoldText, VideoContainer, LinkText, PeriodText } from '../style';
import { content } from './content';
import { GithubLink } from '../../../components/GithubLink';
import { SpeakerDeck } from '../../../components/SpeakerDeck';

export const TapiTapi = () => {
  window.scrollTo(0, 0);
  return (
    <ContentContainer>
      <Container>
        <ProductImage src={content.topImage} />
        <Text>{content.description}</Text>
        <PeriodText>製作期間：１週間</PeriodText>
        <PeriodText>製作人数：１人</PeriodText>
        <BoldText>URL</BoldText>
        <GithubLink
          url="https://github.com/mr04vv/TapiTapi"
          name="mr04vv/TapiTapi"
          description="タピオカの行列を解消するアプリ＆POSシステム. Contribute to mr04vv/TapiTapi development by creating an account on GitHub."
        />
        <LinkText>
          <Link to={{ pathname: 'https://tapitapi-f601b.firebaseapp.com/' }} target="_blank" rel="noopener noreferrer">
            アプリURL
          </Link>
        </LinkText>

        <BoldText>技術スタック</BoldText>
        <ProductImage src={content.secondImage} />
        <BoldText>デモ動画</BoldText>
        <VideoContainer>
          <ReactPlayer
            width="100%"
            height={window.innerWidth < 420 ? '300px' : '500px'}
            controls
            url="https://www.youtube.com/watch?v=US6m29JXudo"
          />
        </VideoContainer>
        <BoldText>スライド</BoldText>
        <SpeakerDeck width="100%" height="100%" deckId="e26be4eddd4645d09ce1c79d15a6e0ca" />
      </Container>
    </ContentContainer>
  );
};
