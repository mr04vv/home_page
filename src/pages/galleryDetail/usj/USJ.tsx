import React from 'react';
import { ContentContainer } from '../../../components/ContentContainer';
import { usjContent, GalleryDetailContent } from './usjContent';
import { GalleryDetailCard } from '../components/GalleryDetailCard';
import { Container } from '../style';
import { Heading } from '../../../components/Heading';

export const USJ = () => {
  window.scrollTo(0, 0);
  return (
    <ContentContainer>
      <Heading>USJ Photos</Heading>
      <Container>
        {usjContent.map((u: GalleryDetailContent) => (
          <GalleryDetailCard src={u.src} />
        ))}
      </Container>
    </ContentContainer>
  );
};
