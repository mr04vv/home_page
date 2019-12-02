import React from 'react';
import { ContentContainer } from '../../components/ContentContainer';
import { ProductCard } from './components/ProductCard';
import { Container } from './style';
import { Heading } from '../../components/Heading';
import productContent, { ProductContent } from './productContent';
import { DummyProductCard } from './components/ProductCard/ProductCard';

export const Product = () => {
  const dummyCard = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3 - (productContent.length % 3); i++) {
    dummyCard.push(i);
  }
  return (
    <ContentContainer>
      <Heading>Product</Heading>

      <Container>
        {productContent.map((p: ProductContent) => (
          <ProductCard src={p.src} description={p.description} name={p.name} />
        ))}
        {dummyCard.map(() => (
          <DummyProductCard />
        ))}
      </Container>
    </ContentContainer>
  );
};