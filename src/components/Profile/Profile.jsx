import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Info,
  Stats,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
