import styled from '@emotion/styled';

export const Item = styled.li`
  background-color: ${props => props.theme.colors.secondBgColor};
  display: flex;
  align-items: center;
  min-width: 780px;
  padding: ${props => props.theme.spacing(3)}
    ${props => props.theme.spacing(20)};
  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(1)};
  }
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50px;
  margin-right: 50px;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'black';
    }
  }};
`;

export const Thumb = styled.div`
  border: 1px solid grey;
  border-radius: 25%;
  width: 48px;
  overflow: hidden;
  margin-right: ${props => props.theme.spacing(30)};
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-weight: 300;
`;
