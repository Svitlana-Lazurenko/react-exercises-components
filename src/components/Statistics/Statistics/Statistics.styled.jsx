import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  padding: 24px;
`;

export const StatisticsTitle = styled.h1`
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;
