import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  background-color: ${props => props.theme.colors.tertiaryBgColor};
  margin-bottom: ${props => props.theme.spacing(10)};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing(10)};
`;

export const Avatar = styled.img``;

export const Thumb = styled.div`
  border: 1px solid grey;
  border-radius: 50%;
  width: 250px;
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing(7.5)};
`;

export const Name = styled.p`
  font-weight: 400;
  font-size: 45px;
  margin-bottom: ${props => props.theme.spacing(10)};
`;

export const Info = styled.p`
  color: ${props => props.theme.colors.secondaryText};
  font-weight: 300;
  font-size: 30px;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const Stats = styled.ul`
  background-color: ${props => props.theme.colors.accentColor};
  display: flex;
  padding: ${props => props.theme.spacing(5)};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  :not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.primaryText};
  }
`;

export const Label = styled.span`
  font-weight: 300;
  font-size: 30px;
  color: ${props => props.theme.colors.tertiaryText};
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const Quantity = styled.span`
  font-size: 25px;
  font-weight: 600;
`;
