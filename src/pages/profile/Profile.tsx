import React from 'react';
import { ContentContainer } from '../../components/ContentContainer';
import { Heading } from '../../components/Heading';
import {
  ProfileContainer,
  ProfileImageContainer,
  ProfileItemTitle,
  ProfileContentContainer,
  ProfileItem,
  ProfileImage
} from './style';
import ProfileImg from '../../images/profile/profile.jpg';
import { profileContent, ProfileContent } from './profileContent';

export const Profile = () => (
  <ContentContainer>
    <Heading>Profile</Heading>
    <ProfileContainer>
      <ProfileContentContainer>
        {profileContent.map((p: ProfileContent) => (
          <>
            <ProfileItemTitle>{p.title}</ProfileItemTitle>
            <ProfileItem>{p.content}</ProfileItem>
          </>
        ))}
      </ProfileContentContainer>
      <ProfileImageContainer>
        <ProfileImage src={ProfileImg} />
      </ProfileImageContainer>
    </ProfileContainer>
  </ContentContainer>
);
