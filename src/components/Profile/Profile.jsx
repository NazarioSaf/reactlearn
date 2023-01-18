import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts post={props.profilePage.post} 
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch} 
       />
    </div>
  );
}

export default Profile;