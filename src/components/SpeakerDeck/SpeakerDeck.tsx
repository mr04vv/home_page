import React from 'react';
import { DeckContainer } from './style';

interface Props {
  width: string;
  height: string;
  deckId: string;
}

export const SpeakerDeck: React.SFC<Props> = ({ width, height, deckId }) => (
  <DeckContainer>
    <iframe
      title={deckId}
      src={`//speakerdeck.com/player/${deckId}`}
      style={{ border: 0, top: 0, left: 0, width, height, position: 'absolute' }}
      frameBorder="0"
      allowFullScreen
    />
  </DeckContainer>
);
