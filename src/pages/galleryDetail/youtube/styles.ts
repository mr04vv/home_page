import styled from 'styled-components';
import { FONT_COLOR_GRAY } from '../../../styles/color';

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto 80px;
  flex-wrap: wrap;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 80%;
  margin: 0 auto;
`;

export const ProductSmallImage = styled.img`
  width: 40%;
  margin: 0 auto;
`;

export const Text = styled.p`
  margin: 20px auto;
  width: 80%;
`;

export const PeriodText = styled.p`
  text-align: left;
  font-size: 14px;
  width: 80%;
  margin: 6px auto;
  color: ${FONT_COLOR_GRAY};
`;

export const BoldText = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const LinkText = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 3px auto;
  :hover {
    cursor: pointer;
  }
`;

export const VideoContainer = styled.div`
  margin: 10px auto;
  width: 80%;
  @media (max-width: 500px) {
    width: '100%';
  }
`;

export const TweetContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
