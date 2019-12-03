import React from 'react';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container } from '../style';
import { GalleryDetailCard } from '../components/GalleryDetailCard';
import { GalleryDetailContent } from '../usj/usjContent';
import { disneyContent } from './disneyContent';
import { Heading } from '../../../components/Heading';

export const Disney = () => {
  window.scrollTo(0, 0);
  return (
    <ContentContainer>
      <Heading>Disney Photos</Heading>
      <Container>
        {disneyContent.map((u: GalleryDetailContent) => (
          <GalleryDetailCard key={u.src} src={u.src} />
        ))}
      </Container>
    </ContentContainer>
  );
};
