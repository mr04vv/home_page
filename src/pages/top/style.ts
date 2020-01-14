import styled, { css } from 'styled-components';

const SectionStyle = css`
  border-bottom: 1px solid white;
  padding: 1rem;
  scroll-snap-align: start;
  text-align: center;
  position: relative;
  scroll-snap-type: y mandatory;
`;

export const TopSection = styled.section`
  height: 100vh;
  ${SectionStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProfileSection = styled.section`
  ${SectionStyle};
`;

export const WorkSection = styled.section`
  ${SectionStyle};
`;

export const ProductSection = styled.section`
  ${SectionStyle};
`;

export const GallerySection = styled.section`
  ${SectionStyle};
`;

export const AllRightReserved = styled.p`
  color: #666;
  font-size: 12px;
  text-align: center;
  margin-bottom: 40px;
`;
