import React, { Fragment } from 'react';
import { Top } from './Top';
import { TopSection, ProfileSection, WorkSection, GallerySection, ProductSection, AllRightReserved } from './style';
import { Profile } from '../profile';
import { Product } from '../product';
import { Work } from '../work';
import { Gallery } from '../gallery';

export const TopViewContainer: React.SFC = () => {
  // const nameWidth = window.innerWidth < 700 ? '260' : '490';
  // const titleWidth = window.innerWidth < 700 ? '66' : '150';
  const nameSize = window.innerWidth < 700 ? 28 : 44;
  const titleSize = window.innerWidth < 700 ? 20 : 32;
  return (
    <Fragment>
      <TopSection id="section0" color="#FFBA00">
        <Top nameSize={nameSize} titleSize={titleSize} />
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
