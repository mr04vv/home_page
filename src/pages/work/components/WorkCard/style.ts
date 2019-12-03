import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FONT_COLOR_GRAY } from '../../../../styles/color';

export const CardContainer = styled.div`
  width: 32%;
  height: auto;
  margin: 30px 0;
  @media (max-width: 420px) {
    width: 90%;
    margin: 10px auto;
  }
  @media (max-width: 1024px) and (min-width: 421px) {
    width: 45%;
    margin: 12px auto;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 16vw;
  @media (max-width: 420px) {
    height: unset;
  }
  @media (max-width: 1024px) and (min-width: 421px) {
    height: 22vw;
  }
`;

export const CardName = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 16px;
  font-weight: bold;
  margin: 8px auto;
  height: 20px;
`;

export const SimpleText = styled.p`
  font-size: 12px;
  margin: 4px auto;
`;

export const WeakText = styled.p`
  font-size: 12px;
  margin: 4px auto;
  color: ${FONT_COLOR_GRAY};
`;

export const CardDescription = styled.p`
  margin: 0 auto;
  font-size: 12px;
  height: 10em;
  text-align: left;
  overflow: hidden;
  line-height: 1.5;
  background-color: #fff;
  /* config end */
  padding-right: 1em;
  position: relative;
  overflow: hidden;
  :before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-block;
    width: 1em;
  }
  :after {
    content: '';
    position: relative;
    right: -1em;
    float: right;
    width: 1em;
    height: 100%;
    background-color: inherit;
  }
  @media (max-width: 420px) {
    height: auto;
    :before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      display: inline-block;
      width: 1em;
    }
  }
  @media (max-width: 1024px) and (min-width: 421px) {
    height: 14vh;
  }
`;

export const ButtonWrapper = styled.div`
  height: 5vh;
  width: 100%;
  color: white;
  @media (max-width: 420px) {
    margin: 16px auto;
  }
  @media (max-width: 1024px) and (min-width: 421px) {
    width: 100%;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
