import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 24px;
`;

export const Status = styled.span`
  padding: 24px;
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

export const Avatar = styled.img`
  padding: 24px;
`;

export const Name = styled.p`
  padding: 24px;
`;
