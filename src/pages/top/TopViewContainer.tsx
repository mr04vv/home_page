import React, { Fragment } from 'react';
import { Top } from './Top';
import { TopSection, ProfileSection, WorkSection, GallerySection, ProductSection, AllRightReserved } from './style';
import { Profile } from '../profile';
import { Product } from '../product';
import { Work } from '../work';
import { Gallery } from '../gallery';

export const TopViewContainer: React.SFC = () => {
  const nameWidth = window.innerWidth < 420 ? '260' : '490';
  const titleWidth = window.innerWidth < 420 ? '66' : '150';
  return (
    <Fragment>
      <TopSection id="section0" color="#d3f5ff">
        <Top nameWidth={nameWidth} titleWidth={titleWidth} />
      </TopSection>
      <ProfileSection id="profile" color="#ffe9c3">
        <Profile />
      </ProfileSection>
      <ProductSection id="product">
        <Product />
      </ProductSection>
      <WorkSection id="work">
        <Work />
      </WorkSection>
      <GallerySection id="gallery">
        <Gallery />
      </GallerySection>
      <AllRightReserved>© 2019 Takuto Mori All Rights Reserved. Designed by Takuto Mori</AllRightReserved>
    </Fragment>
  );
};
