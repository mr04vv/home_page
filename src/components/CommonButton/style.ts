import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import { FONT_COLOR_WHITE, GREEN_COLOR, BLUE_COLOR, ORANGE_COLOR } from '../../styles/color';

const ButtonStyle = css`
  width: 100%;
  border-radius: 30px;
  text-transform: unset;
  background: #fff;
  color: #fff;
  position: relative;

  ::after {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    border-radius: 30px;
    content: '';
    position: absolute;
    z-index: -1;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
  }
  :hover:after {
    height: 0;
    left: 50%;
    top: 50%;
    width: 0;
  }
`;

export const CustomGreenButton: React.FC = styled(Button)`
  ${ButtonStyle}
  background-color: ${GREEN_COLOR};
  color: ${FONT_COLOR_WHITE};
  border: ${GREEN_COLOR} solid 2px;
  ::after {
    background-color: ${GREEN_COLOR};
  }
  :hover {
    color: ${GREEN_COLOR};
    background: rgba(255,255,255,0.08);
  }
`;

export const CustomBlueButton: React.FC = styled(Button)`
  ${ButtonStyle}
  background: ${BLUE_COLOR};
  border: ${BLUE_COLOR} solid 2px;
  :hover {
    color: ${BLUE_COLOR};
    background: rgba(255,255,255,0.08);
  }
  ::after {
    background-color: ${BLUE_COLOR};
  }
`;

export const CustomOrangeButton: React.FC = styled(Button)`
  ${ButtonStyle}
  background-color: ${ORANGE_COLOR};
  color: ${FONT_COLOR_WHITE};
  border: ${ORANGE_COLOR} solid 2px;
  ::after {
    background-color: ${ORANGE_COLOR};
  }
  :hover {
    color: ${ORANGE_COLOR};
    background: rgba(255,255,255,0.08);
  }
`;
