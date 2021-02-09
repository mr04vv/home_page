/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { GifImage, TitleContainer, SiteTitle, MyName, NameContainer, SiteTitleContainer } from './style';
// import SVG from '../../../components/SVG';
// import { SVG2 } from '../../../components/SVG2';
import GifIcon from '../../../images/profile/icon.gif';

interface Props {
  nameSize: number;
  titleSize: number;
}

export const Top: React.SFC<Props> = ({ nameSize, titleSize }) => (
  <>
    <TitleContainer>
      <GifImage src={GifIcon} />
      <NameContainer>
        <MyName size={nameSize}>TAKUTO MORI's</MyName>
      </NameContainer>
      <SiteTitleContainer>
        <SiteTitle size={titleSize}>PORTFOLIO SITE</SiteTitle>
      </SiteTitleContainer>
      {/* <Name>
        <SVG width={nameWidth} />
      </Name>
      <Title>
        <SVG2 width={titleWidth} />
      </Title> */}
    </TitleContainer>
  </>
);
