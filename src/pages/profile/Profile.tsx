import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContentContainer } from '../../components/ContentContainer';
import { Heading } from '../../components/Heading';
import {
  ProfileContainer,
  ProfileImageContainer,
  ProfileItemTitle,
  ProfileContentContainer,
  ProfileItem,
  ProfileImage,
  IconContainer
} from './style';
import ProfileImg from '../../images/profile/profile.jpg';
import { profileContent, ProfileContent } from './profileContent';

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
      <IconContainer>
        <FontAwesomeIcon icon={faCoffee} />
      </IconContainer>
    </ProfileContainer>
  </ContentContainer>
);
