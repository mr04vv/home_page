import React from 'react';
import { ContentContainer } from '../../../components/ContentContainer';
import { usagiContent, GalleryDetailContent } from './usagiContent';
import { GalleryDetailCard } from '../components/GalleryDetailCard';
import { Container } from '../style';
import { Heading } from '../../../components/Heading';

export const Usagi = () => {
  window.scrollTo(0, 0);
  return (
    <ContentContainer>
      <Heading>Rabbit Photos</Heading>
      <Container>
        {usagiContent.map((u: GalleryDetailContent) => (
          <GalleryDetailCard key={u.src} src={u.src} />
        ))}
      </Container>
    </ContentContainer>
  );
};
