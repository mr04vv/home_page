import React from 'react';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container } from '../style';
import { GalleryDetailCard } from '../components/GalleryDetailCard';
import { GalleryDetailContent } from '../usj/usjContent';
import { europeContent } from './europeContent';
import { Heading } from '../../../components/Heading';

export const Europe = () => {
  window.scrollTo(0, 0);
  return (
    <ContentContainer>
      <Heading>Europe Photos</Heading>

      <Container>
        {europeContent.map((u: GalleryDetailContent) => (
          <GalleryDetailCard key={u.src} src={u.src} />
        ))}
      </Container>
    </ContentContainer>
  );
};
