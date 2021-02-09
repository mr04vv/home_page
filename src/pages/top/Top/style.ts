import styled from 'styled-components';

export const Name = styled('div')``;

export const Title = styled('div')`
  margin: -30px auto;
  @media (max-width: 500px) {
    margin: -60px auto;
  }
`;

export const GifImage = styled.img`
  width: 400px;
  max-width: 100vw;
`;

interface Props {
  size: number;
}

export const SiteTitle = styled.div<Props>`
  font-size: ${props => props.size}px;
  color: #6A6A6A;
  letter-spacing: 3.8px;
  font-family: 'break regular';
`;

export const NameContainer = styled.div`
  margin: 8px 0;
`;

export const SiteTitleContainer = styled.div`
  margin: 8px 0;
`;

export const MyName = styled.div<Props>`
  font-size: ${props => props.size}px;
  color: #6A6A6A;
  letter-spacing: 3.8px;
  font-family: 'break regular';
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
