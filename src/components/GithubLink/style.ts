import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BORDER_GRAY, FONT_COLOR_GRAY, ICON_COLOR_DARK_GRAY } from '../../styles/color';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  border: ${BORDER_GRAY} solid 1px;
  margin: 0 auto;
  padding: 10px;
  @media (max-width: 420px) {
    width: 90%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  @media (max-width: 420px) {
    width: 98%;
  }
`;

export const DetailContainer = styled.div``;

export const ImageContainer = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  display: inline;
  color: ${ICON_COLOR_DARK_GRAY};
  :hover {
    text-decoration: underline;
  }
`;

export const LinkIcon = styled(Link)`
  text-decoration: none;
  text-align: left;
  display: flex;
  align-items: center;
  color: ${ICON_COLOR_DARK_GRAY};
  :hover {
    text-decoration: underline;
  }
`;

export const LinkIconText = styled(Link)`
  text-decoration: none;
  text-align: left;
  display: inline;
  color: ${ICON_COLOR_DARK_GRAY};
  :hover {
    text-decoration: underline;
  }
`;

export const DescriptionText = styled.p`
  margin: 10px auto;
  font-size: 14px;
  min-height: 48%;
  color: ${FONT_COLOR_GRAY};
`;

export const WeakText = styled.p`
  font-size: 11px;
  display: inline;
  font-weight: 100;
  padding-left: 3px;
  color: ${FONT_COLOR_GRAY};
`;
