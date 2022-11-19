import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hi, how are you', like: 12 },
    { id: 2, message: 'Это мой первый пост?', like: 42 }
   ]

   let postsElements = 
   postsData.map ( posts => <Post message={posts.message} like={posts.like} /> )

  return (
    <div className={s.postBlock}>
      My posts
      <div>
        <div><textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div><button>Add post</button></div>
      </div>
      <div className='{s.posts}'>
        {
          ( postsElements )
        }
      </div>
    </div>);
}

export default MyPosts;