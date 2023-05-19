import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  background-color: ${props => props.theme.colors.tertiaryBgColor};
  padding-top: ${props => props.theme.spacing(6)};
  margin-bottom: ${props => props.theme.spacing(20)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticsTitle = styled.h1`
  font-size: 50px;
  font-weight: 200;
  margin-bottom: ${props => props.theme.spacing(12.5)};
`;

export const List = styled.ul`
  display: flex;
`;
