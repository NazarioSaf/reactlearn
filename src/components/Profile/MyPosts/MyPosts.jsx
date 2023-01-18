import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.post.map (p => <Post message={p.message} like={p.like} /> )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
}

  return (
    <div className={s.postBlock}>
      My posts
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
          </div>
      </div>
      <div className={s.posts}>
       {(postsElements)}
      </div>
    </div>);
}

export default MyPosts;