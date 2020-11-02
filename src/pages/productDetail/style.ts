import styled from 'styled-components';
import { FONT_COLOR_GRAY } from '../../styles/color';

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

export const ProductSubImage = styled.img`
  @media (max-width: 500px) {
    width: 90%;
    margin: 4px auto;
  }
  @media (min-width: 501px) {
    width: 45%;
    margin: 12px 0;
  }
`;

export const ProductImage = styled.img`
  width: 90%;
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
  max-width: 600px;
  margin: 0 auto;
  justify-content: center;
`;

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-evenly;
`;
