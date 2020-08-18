import React from 'react';
import ReactPlayer from 'react-player';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, VideoContainer, Text } from './styles';
import { Heading } from '../../../components/Heading';

export const Youtube = () => {
  window.scrollTo(0, 0);
  return (
    <ContentContainer>
      <Heading>動画制作</Heading>
      <Container>
        <Text>
          Youtubeで活躍するゲーム実況者、わいわいさんが制作した歌ってみたの動画を再現しました。音作りや、歌、動画編集、写真素材全て自分で作成しました。
        </Text>
        <VideoContainer>
          <ReactPlayer
            width="100%"
            height={window.innerWidth < 420 ? '300px' : '500px'}
            controls
            url="https://www.youtube.com/watch?v=S62YLmuWFIg"
          />
        </VideoContainer>
        <VideoContainer>
          <ReactPlayer
            width="100%"
            height={window.innerWidth < 420 ? '300px' : '500px'}
            controls
            url="https://www.youtube.com/watch?v=99sK5WvaMJE"
          />
        </VideoContainer>
      </Container>
    </ContentContainer>
  );
};
