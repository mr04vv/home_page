import React from 'react';
import { Toolbar } from '@material-ui/core';
import { CustomAppBar, CustomLink, LinkContainer } from './style';

export const Header: React.SFC = () => (
  <>
    <CustomAppBar position="fixed">
      <Toolbar>
        <LinkContainer>
          <CustomLink to="/#profile">Profile</CustomLink>
          <CustomLink to="/#product">Product</CustomLink>
          <CustomLink to="/#work">Work</CustomLink>
          <CustomLink to="/#gallery">Gallery</CustomLink>
        </LinkContainer>
      </Toolbar>
    </CustomAppBar>
  </>
);
