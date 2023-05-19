import styled from '@emotion/styled';

export const Tr = styled.tr`
  font-weight: 200;
  :nth-of-type(even) {
    background-color: ${props => props.theme.colors.mediumAccentColor};
  }
`;

export const Td = styled.td`
  padding: ${props => props.theme.spacing(4)};
  text-align: center;
`;
