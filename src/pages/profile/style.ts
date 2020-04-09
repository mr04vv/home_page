import styled, { css } from 'styled-components';
import { FONT_COLOR_GRAY } from '../../styles/color';

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 624px) {
    flex-direction: column-reverse;
  }
`;

export const ProfileContentContainer = styled.div`
  width: 50%;
  /* @media (max-width: 1024px) and (min-width: 501px) {
    width: 80%;
    margin: 0 auto;
  } */
  @media (max-width: 624px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  /* @media (max-width: 1024px) and (min-width: 501px) {
    width: 80%;
    margin: 0 auto;
  } */
  @media (max-width: 624px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ProfileImage = styled.img`
  width: 80%;
  @media (max-width: 624px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const ProfileItemStyle = css`
  margin: 4px 0 0 auto;
  width: 90%;
  text-align: left;
  letter-spacing: 1px;
  color: ${FONT_COLOR_GRAY};
  /* @media (max-width: 1024px) and (min-width: 501px) {
    width: 80%;
    margin: 0 auto;
  } */
  @media (max-width: 624px) {
    width: 90%;
    margin: 4px auto;
  }
`;

export const ProfileItemTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
  ${ProfileItemStyle}
  margin: 10px 0 0 auto;
  @media (max-width: 624px) {
    margin: 8px auto 0;
  }
`;

export const ProfileItem = styled.p`
  font-size: 16px;
  font-weight: 100;
  ${ProfileItemStyle}
  @media (max-width: 624px) {
    margin: 2px auto;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 40px auto 0;
`;
