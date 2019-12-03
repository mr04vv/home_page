import styled from 'styled-components';

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
`;
