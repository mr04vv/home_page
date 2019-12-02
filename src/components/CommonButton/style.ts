import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import {
  HOVER_GREEN_COLOR,
  FONT_COLOR_WHITE,
  GREEN_COLOR,
  BLUE_COLOR,
  HOVER_BLUE_COLOR,
  HOVER_ORANGE_COLOR,
  ORANGE_COLOR
} from '../../styles/color';

const ButtonStyle = css`
  width: 100%;
  border-radius: 30px;
  text-transform: unset;
`;

export const CustomGreenButton: React.FC = styled(Button)`
  ${ButtonStyle}
  background-color: ${GREEN_COLOR};
  color: ${FONT_COLOR_WHITE};
  :hover {
    transition: background-color 0s;
    background-color: ${HOVER_GREEN_COLOR};
  }
`;

export const CustomBlueButton: React.FC = styled(Button)`
  ${ButtonStyle}
  background-color: ${BLUE_COLOR};
  color: ${FONT_COLOR_WHITE};
  :hover {
    transition: background-color 0s;
    background-color: ${HOVER_BLUE_COLOR};
  }
`;

export const CustomOrangeButton: React.FC = styled(Button)`
  ${ButtonStyle}
  background-color: ${ORANGE_COLOR};
  color: ${FONT_COLOR_WHITE};
  :hover {
    transition: background-color 0s;
    background-color: ${HOVER_ORANGE_COLOR};
  }
`;
