import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.post.map (p => <Post message={p.message} like={p.like} /> )

  return (
    <div className={s.postBlock}>
      My posts
      <div>
        <div><textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
       {
        (postsElements)
       }
      </div>
    </div>);
}

export default MyPosts;