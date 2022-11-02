import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
  <div className={s.content}>
    <div><img src='https://sun9-41.userapi.com/impf/c629224/v629224629/105a5/RWXAYBOULQE.jpg?size=450x253&quality=96&proxy=1&sign=a5d99141c1a4fcaede64066ec7e75eb6&type=album'></img>
    </div>
    <div>
      ava info
    </div>
    <div>my post
      <div>new post</div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
      </div>
    </div>
  </div>);
}

export default Profile;