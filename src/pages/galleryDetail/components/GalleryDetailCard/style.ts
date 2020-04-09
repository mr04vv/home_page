import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 32%;
  height: auto;
  margin: 30px 0;
  @media (max-width: 500px) {
    width: 90%;
    margin: 10px auto;
  }
  @media (max-width: 1024px) and (min-width: 501px) {
    width: 45%;
    margin: 12px 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
`;
