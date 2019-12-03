import React from 'react';
import { CardContainer, CardImage } from './style';
import { GalleryDetailContent } from '../../usj/usjContent';

export const GalleryDetailCard: React.SFC<GalleryDetailContent> = ({ src }) => (
  <CardContainer>
    <CardImage src={src} />
  </CardContainer>
);
