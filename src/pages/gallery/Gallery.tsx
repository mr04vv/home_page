import React from 'react';
import { ContentContainer } from '../../components/ContentContainer';
import { Heading } from '../../components/Heading';
import { Container } from './style';
import { galleryContent, GalleryContent } from './galleryContent';
import { GalleryCard } from './GalleryCard';
import { DummyGalleyCard } from './GalleryCard/GalleryCard';

export const Gallery = () => {
  const dummyCard = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3 - (galleryContent.length % 3); i++) {
    dummyCard.push(i);
  }
  return (
    <ContentContainer>
      <Heading>Gallery</Heading>
      <Container>
        {galleryContent.map((g: GalleryContent) => (
          <GalleryCard key={g.name} src={g.src} name={g.name} path={g.path} description={g.description} />
        ))}
        {dummyCard.map((d: number) => (
          <DummyGalleyCard key={d} />
        ))}
      </Container>
    </ContentContainer>
  );
};
