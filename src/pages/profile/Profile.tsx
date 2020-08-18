import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { ContentContainer } from '../../components/ContentContainer';
import { Heading } from '../../components/Heading';
import {
  ProfileContainer,
  ProfileImageContainer,
  ProfileItemTitle,
  ProfileContentContainer,
  ProfileItem,
  ProfileImage,
  IconContainer,
} from './style';
import ProfileImg from '../../images/profile/profile3.jpg';
import { profileContent, ProfileContent } from './profileContent';
import { ICON_COLOR_DARK_GRAY } from '../../styles/color';

export const Profile = () => (
  <ContentContainer>
    <Heading>Profile</Heading>
    <ProfileContainer>
      <ProfileContentContainer>
        {profileContent.map((p: ProfileContent) => (
          <div key={p.title}>
            <ProfileItemTitle>{p.title}</ProfileItemTitle>
            <ProfileItem>{p.content}</ProfileItem>
          </div>
        ))}
      </ProfileContentContainer>
      <ProfileImageContainer>
        <ProfileImage src={ProfileImg} />
      </ProfileImageContainer>
    </ProfileContainer>
    <IconContainer>
      <Link to={{ pathname: 'https://www.facebook.com/mr04vv' }} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon size="lg" icon={faFacebookSquare} color={ICON_COLOR_DARK_GRAY} />
      </Link>
      <Link to={{ pathname: 'https://github.com/mr04vv' }} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon size="lg" icon={faGithub} color={ICON_COLOR_DARK_GRAY} />
      </Link>
      <Link to={{ pathname: 'https://twitter.com/_mooriii' }} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon size="lg" icon={faTwitter} color={ICON_COLOR_DARK_GRAY} />
      </Link>
      <Link to={{ pathname: 'https://www.instagram.com/_mooriiii/' }} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon size="lg" icon={faInstagram} color={ICON_COLOR_DARK_GRAY} />
      </Link>
    </IconContainer>
  </ContentContainer>
);
