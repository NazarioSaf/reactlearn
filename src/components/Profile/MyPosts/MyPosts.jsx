import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/ProfileReducer';



const MyPosts = (props) => {
  let postsElements = props.post.map (p => <Post message={p.message} like={p.like} /> )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

let onPostChange = () => {
  let text = newPostElement.current.value;
  let action = updateNewPostTextActionCreator(text);
  props.dispatch(action)
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