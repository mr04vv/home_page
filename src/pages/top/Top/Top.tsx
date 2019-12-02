import React from 'react';
import { Title, Name } from './style';
import SVG from '../../../components/SVG';
import { SVG2 } from '../../../components/SVG2';

interface Props {
  nameWidth: string;
  titleWidth: string;
}

export const Top: React.SFC<Props> = ({ nameWidth, titleWidth }) => (
  <>
    <Name>
      <SVG width={nameWidth} />
    </Name>
    <Title>
      <SVG2 width={titleWidth} />
    </Title>
  </>
);
