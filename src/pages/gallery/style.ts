import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 420px) {
    width: 100%;
  }
`;
