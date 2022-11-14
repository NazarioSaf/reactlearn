import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.postBlock}>
      My posts
      <div>
        <div><textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div><button>Add post</button></div>
      </div>
      <div className='{s.posts}'>
        <Post message='Hi, how are you?' like="10" />
        <Post message='Это мой первый пост' like="20" />

      </div>
    </div>);
}

export default MyPosts;