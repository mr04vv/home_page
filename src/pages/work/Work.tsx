import React from 'react';
import { ContentContainer } from '../../components/ContentContainer';
import { Heading } from '../../components/Heading';
import workContent, { WorkContent } from './workContent';
import { Container } from './style';
import { WorkCard } from './components/WorkCard';
import { DummyWorkCard } from './components/WorkCard/WorkCard';

export const Work = () => {
  const dummyCard = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3 - (workContent.length % 3); i++) {
    dummyCard.push(i);
  }
  return (
    <ContentContainer>
      <Heading>Work</Heading>
      <Container>
        {workContent.map((p: WorkContent) => (
          <WorkCard
            src={p.src}
            description={p.description}
            name={p.name}
            period={p.period}
            position={p.position}
            url={p.url}
          />
        ))}
        {dummyCard.map(() => (
          <DummyWorkCard />
        ))}
      </Container>
    </ContentContainer>
  );
};
