import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

  let postsElements = props.post.map (p => <Post message={p.message} like={p.like} /> )

  let newPostElement = React.createRef();

  let AddPost = () => {
    props.OnAddPost();
  }

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
}

  return (
    <div className={s.postBlock}>
      My posts
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={ AddPost }>Add post</button>
          </div>
      </div>
      <div className={s.posts}>
       {(postsElements)}
      </div>
    </div>);
}

export default MyPosts;