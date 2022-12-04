import React from 'react';
import FriendsBar from './FriendBar/FriendsBar';
import s from './Friends.module.css';

const Friends = (props) => {
  let friendElements = props.state.name.map(f => <FriendsBar name={f.name} />)

  return (
<div>
{(friendElements)}
</div>
    );
};

export default Friends;