import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  Container,
  DetailContainer,
  ContentContainer,
  ImageContainer,
  LinkText,
  DescriptionText,
  WeakText,
  LinkIconText,
  LinkIcon
} from './style';
import MoriImage from '../../images/mori.jpeg';

interface Props {
  name: string;
  description: string;
  url: string;
}

export const GithubLink: React.SFC<Props> = ({ name, description, url }) => (
  <>
    <Container>
      <ContentContainer>
        <DetailContainer>
          <LinkText to={{ pathname: url }} target="_blank" rel="noopener noreferrer">
            {name}
          </LinkText>
          <DescriptionText>{description}</DescriptionText>
          <LinkIconText to={{ pathname: url }} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon style={{ paddingTop: '2px' }} icon={faGithub} size="xs" />
            <WeakText>github.com</WeakText>
          </LinkIconText>
        </DetailContainer>
        <LinkIcon to={{ pathname: url }} target="_blank" rel="noopener noreferrer">
          <ImageContainer src={MoriImage} alt="" />
        </LinkIcon>
      </ContentContainer>
    </Container>
  </>
);
