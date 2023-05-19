import styled from '@emotion/styled';

export const Table = styled.table``;

export const Head = styled.thead`
  background-color: ${props => props.theme.colors.accentColor};
  color: ${props => props.theme.colors.tertiaryText};
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  font-weight: 400;
  min-width: 265px;
  padding: ${props => props.theme.spacing(5)};
`;

export const Body = styled.tbody`
  background-color: ${props => props.theme.colors.lightAccentColor};
`;
