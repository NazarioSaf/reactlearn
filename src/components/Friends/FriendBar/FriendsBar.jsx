import React from 'react';
import s from './FriendsBar.module.css';

const FriendsBar = (props) => {
  return (
    <div className={s.friends}>
<img src="https://e7.pngegg.com/pngimages/552/861/png-clipart-computer-icons-avatar-avatar-computer-icons-avatar.png" alt="" />
<br />
<span>{props.name}</span>
      </div>
    );
};

export default FriendsBar;