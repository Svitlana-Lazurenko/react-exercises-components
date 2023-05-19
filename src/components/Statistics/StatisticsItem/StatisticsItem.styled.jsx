import styled from '@emotion/styled';

export const Item = styled.li`
  color: ${props => props.theme.colors.tertiaryText};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 189px;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }};
  padding: ${props => props.theme.spacing(2)};
`;

export const Label = styled.span`
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const Percentage = styled.span``;
